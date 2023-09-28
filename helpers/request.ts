import { Request, Response, NextFunction, RequestHandler } from 'express'
import axios from 'axios'

export const asyncHandler =
  (handler: RequestHandler): RequestHandler =>
      async (req: Request, res: Response, next: NextFunction): Promise<void> => {
          try {
              await handler(req, res, next)
          } catch (e) {
              const { message, statusCode = 500 } = e as {
        message: string;
        statusCode: number;
      }
              res.status(statusCode).json({ error: message })
          }
      }

// interface RequestOptions<M extends keyof Queries = 'GET'> {
//   method?: M;
//   params?: Record<string, string>;
//   body?: object;
// }

// type QueryResponse<
//   U extends keyof Queries[M],
//   M extends keyof Queries = 'GET'
// > = 'response' extends keyof Queries[M][U] ? Queries[M][U]['response'] : never;

const injectParamsToUrl = (
    url: string,
    params?: Record<string, string>
): string => {
    if (params == null) {
        return url
    }
    let modifiedUrl = url
    for (const [key, value] of Object.entries(params)) {
        modifiedUrl = modifiedUrl.replace(`:${key}`, value)
    }
    return modifiedUrl
}

const SERVER_HOST = ''
const SERVER_PREFIX = ''

export const query = async <
  U extends keyof Queries[M],
  M extends keyof Queries = 'GET'
>(
    relativeUrl: U,
    options: RequestOptions<M>
): Promise<QueryResponse<U, M>> => {
    const { method = 'GET', body } = options

    const url = `${SERVER_HOST}${SERVER_PREFIX}${injectParamsToUrl(
        String(relativeUrl),
        options.params
    )}`

    const { data } =
    method === 'GET'
        ? await axios({ url, method })
        : await axios({ url, method, data: body })

    return data
}

type QueryParams = {
  [key: string]: string | number | boolean | string[] | number[] | boolean[];
};

export const queryParamsToString = (queryParams: QueryParams) => {
    const partialStrings = Object.entries(queryParams)
        .map(([key, value]) =>
            Array.isArray(value)
                ? value.map((v) => `${key}[]=${v}`)
                : `${key}=${value}`
        )
        .flat()
    return partialStrings.join('&')
}

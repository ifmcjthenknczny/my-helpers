import { TypedUseSelectorHook, useSelector } from 'react-redux';

const useLocalSelector: TypedUseSelectorHook<AppState> = useSelector

export default useLocalSelector
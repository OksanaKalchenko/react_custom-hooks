import useFocus from "../hooks/useFocus";

export default function Component2() {
    const [inputRef, focusInput] = useFocus()

    return (
        <div>
            <input ref={inputRef} />
            <button onClick={focusInput}>Установить фокус</button>
        </div>
    )
}
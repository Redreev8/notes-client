import classNames from 'classnames'
import { AreaHTMLAttributes, forwardRef } from 'react'

interface LabelProps extends AreaHTMLAttributes<HTMLLabelElement> {
    value: string
    name: string
    checked?: boolean
    idInput?: string
    required?: boolean
}

const RadioCard = forwardRef<HTMLInputElement, LabelProps>(function RadioCardRef({ checked=false, className, name, required, value, idInput, children, ...props }, ref) {
    const cl = classNames(
        'p-3 border-2 border-slate-700 rounded-lg cursor-pointer peer-checked:border-green-300 peer-checked:text-green-300 hover:border-green-300 hover:text-green-300',
        className
    )
    return (
        <div className='flex'>
            <input type="radio" checked={checked} id={ idInput ? idInput : '' } name={ name } value={ value } className="peer hidden" required={required} ref={ref} />
            <label
                htmlFor={name}
                className={ cl }
                { ...props }
            >
                { children }
            </label>
        </div>
    )
})


export default RadioCard
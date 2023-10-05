import { ChangeEvent, ReactNode } from "react";
interface ITextField {
  fieldType: string;
  children?: ReactNode;
  fieldHolder?: string;
  fieldLabel?: string;
  fieldId: string;
  message?: string;
  fieldRequired?: boolean;
  changeHandler: (e: ChangeEvent<HTMLInputElement>) => void;
}
const TextField = ({
  children,
  changeHandler,
  fieldId,
  fieldLabel,
  fieldHolder,
  fieldType,
  message,
  fieldRequired = false,
}: ITextField) => {
  return (
    <div className="w-full py-1">
      <label htmlFor={fieldId} className="font-bold">
        {fieldLabel}
      </label>
      <div className="py-0 text-right font-light mr-3 text-sm -mt-1">
        {message}
      </div>
      <div>
        <div className="flex rounded-md overflow-hidden first-line:items-center bg-white text-teal-950">
          <p className="flex justify-center items-center p-1 w-1/12">
            {children}
          </p>
          <input
            type={fieldType}
            onChange={changeHandler}
            id={fieldId}
            placeholder={fieldHolder}
            required={fieldRequired}
            className="px-2 p-1 cursor-pointer w-11/12 focus:outline-none"
          />
        </div>
      </div>
    </div>
  );
};

export default TextField;

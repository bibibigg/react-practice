export default function Button({ children, textOnly, className, ...props }) {
  let cssClasses = textOnly ? "text-button" : "button";
  cssClasses += " " + className;
  // 위 두가지 css이외에 className속성으로 인해 다른 css를 추가할 수 있음
  return (
    <button className={cssClasses} {...props}>
      {children}
    </button>
  );
}

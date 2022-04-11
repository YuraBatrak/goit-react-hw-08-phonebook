import s from './section.module.css';
export default function Section({ title, children }) {
  return (
    <section>
      {title && <div className={s.box_title}>{title}</div>}
      {children}
    </section>
  );
}

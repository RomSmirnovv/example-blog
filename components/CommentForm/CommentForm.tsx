import { Input } from "@/components/UI/Input/Input";
import { TextArea } from "@/components/UI/TextArea/TextArea";
import { Button } from "@/components/UI/Button/Button";
import styles from "./CommentForm.module.css";

export function CommentForm(): JSX.Element {
  return (
    <form className={styles.form}>
      <div className={styles.field}>
        <label htmlFor="comment-name" className={styles.label}>
          Имя
        </label>
        <Input
          id="comment-name"
          type="text"
          name="name"
          placeholder="Введите Ваше имя"
          autoComplete="name"
        />
      </div>

      <div className={styles.field}>
        <label htmlFor="comment-text" className={styles.label}>
          Комментарий
        </label>
        <TextArea
          id="comment-text"
          name="comment"
          placeholder="Введите Ваш комментарий"
        />
      </div>

      <Button type="submit" className={styles.submitButton}>
        Отправить
      </Button>
    </form>
  );
}

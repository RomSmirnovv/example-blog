import { Input } from "@/components/UI/Input/Input";
import { TextArea } from "@/components/UI/TextArea/TextArea";
import { Button } from "@/components/UI/Button/Button";
import styles from "./CommentForm.module.css";

export function CommentForm(): JSX.Element {
  return (
    <form className={styles.form}>
      <Input
        type="text"
        name="name"
        placeholder="Имя"
        aria-label="Имя"
        autoComplete="name"
      />

      <TextArea
        name="comment"
        placeholder="Комментарий"
        aria-label="Комментарий"
      />

      <Button type="submit" className={styles.submitButton}>
        Отправить
      </Button>
    </form>
  );
}

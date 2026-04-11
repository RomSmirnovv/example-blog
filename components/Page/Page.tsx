import { ArticleCard } from "@/components/ArticleCard/ArticleCard";
import styles from "./Page.module.css";

const posts = [
  {
    id: 1,
    title: "Как работать с CSS Grid",
    excerpt:
      "CSS Grid помогает строить двухмерные сетки и удобно раскладывать карточки, контентные блоки и целые страницы без лишних обёрток.",
    href: "#",
    imageSrc: "/images/article-preview.jpg",
    imageAlt: "Превью статьи про CSS Grid",
    category: "Front-end",
    publishedLabel: "1 месяц назад",
    readTime: "3 минуты",
    likesCount: 4,
  },
  {
    id: 2,
    title: "Flexbox и Grid: когда что использовать",
    excerpt:
      "Разбираемся, в каких задачах лучше подходит Flexbox, а где Grid даёт более понятную и устойчивую раскладку.",
    href: "#",
    imageSrc: "/images/article-preview.jpg",
    imageAlt: "Превью статьи про Flexbox и Grid",
    category: "CSS",
    publishedLabel: "3 недели назад",
    readTime: "5 минут",
    likesCount: 8,
  },
  {
    id: 3,
    title: "Адаптивная сетка карточек без боли",
    excerpt:
      "Показываю простой паттерн для адаптивной сетки карточек, который хорошо работает на десктопе, планшете и телефоне.",
    href: "#",
    imageSrc: "/images/article-preview.jpg",
    imageAlt: "Превью статьи про адаптивную сетку",
    category: "Верстка",
    publishedLabel: "2 недели назад",
    readTime: "4 минуты",
    likesCount: 6,
  },
  {
    id: 4,
    title: "Как организовать UI-компоненты в проекте",
    excerpt:
      "Небольшой практический подход к структуре UI-компонентов, чтобы проект не превращался в хаос по мере роста.",
    href: "#",
    imageSrc: "/images/article-preview.jpg",
    imageAlt: "Превью статьи про UI-компоненты",
    category: "React",
    publishedLabel: "10 дней назад",
    readTime: "6 минут",
    likesCount: 10,
  },
  {
    id: 5,
    title: "CSS Modules в Next.js на практике",
    excerpt:
      "Разберём, как удобно организовать стили компонентов в Next.js через CSS Modules и избежать конфликтов классов.",
    href: "#",
    imageSrc: "/images/article-preview.jpg",
    imageAlt: "Превью статьи про CSS Modules",
    category: "Next.js",
    publishedLabel: "1 неделю назад",
    readTime: "4 минуты",
    likesCount: 7,
  },
  {
    id: 6,
    title: "Чистая сетка блога для главной страницы",
    excerpt:
      "Собираем аккуратную контентную часть блога: вводный блок, список статей, адаптив и ограничение ширины контента.",
    href: "#",
    imageSrc: "/images/article-preview.jpg",
    imageAlt: "Превью статьи про страницу блога",
    category: "UI",
    publishedLabel: "3 дня назад",
    readTime: "5 минут",
    likesCount: 12,
  },
];

export default function Page(): JSX.Element {
  return (
    <section className={styles["page"]}>
      <div className={styles["page-inner"]}>
        <div className={styles["page-head"]}>
          <span className={styles["page-kicker"]}>Статьи</span>
          <h1 className={styles["page-title"]}>Последние публикации</h1>
          <p className={styles["page-description"]}>
            Подборка заметок про front-end, CSS, React и Next.js. Сделал
            компактную контентную часть с адаптивной сеткой карточек, чтобы
            страница выглядела аккуратно и не растягивалась слишком широко на
            больших экранах.
          </p>
        </div>

        <div className={styles["grid"]}>
          {posts.map((post) => (
            <ArticleCard
              key={post.id}
              title={post.title}
              excerpt={post.excerpt}
              href={post.href}
              imageSrc={post.imageSrc}
              imageAlt={post.imageAlt}
              category={post.category}
              publishedLabel={post.publishedLabel}
              readTime={post.readTime}
              likesCount={post.likesCount}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

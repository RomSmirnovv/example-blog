import Link from "next/link";
import { ReactNode } from "react";
import styles from "./Layout.module.css";

interface LayoutProps {
  children: ReactNode;
}

export const Layout = ({ children }: LayoutProps): JSX.Element => {
  return (
    <div className={styles["layout"]}>
      <header className={styles["header"]}>
        <div className={styles["container"]}>
          <div className={styles["header-row"]}>
            <Link href="/" className={styles["logo"]}>
              .my_blog
            </Link>

            <a
              href="https://github.com/RomSmirnovv/example-blog"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className={styles["github-link"]}
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M12 2C6.48 2 2 6.59 2 12.25C2 16.78 4.87 20.62 8.84 21.98C9.34 22.08 9.52 21.76 9.52 21.49C9.52 21.25 9.51 20.45 9.51 19.59C6.73 20.21 6.14 18.38 6.14 18.38C5.68 17.18 5.03 16.86 5.03 16.86C4.12 16.22 5.1 16.24 5.1 16.24C6.1 16.31 6.63 17.29 6.63 17.29C7.52 18.86 8.97 18.41 9.54 18.14C9.63 17.47 9.89 17.01 10.18 16.75C7.96 16.49 5.62 15.6 5.62 11.62C5.62 10.49 6.01 9.57 6.66 8.86C6.56 8.6 6.22 7.56 6.76 6.16C6.76 6.16 7.6 5.89 9.51 7.22C10.31 6.99 11.17 6.88 12.03 6.88C12.89 6.88 13.75 6.99 14.55 7.22C16.46 5.89 17.3 6.16 17.3 6.16C17.84 7.56 17.5 8.6 17.4 8.86C18.05 9.57 18.44 10.49 18.44 11.62C18.44 15.61 16.09 16.49 13.86 16.74C14.23 17.08 14.56 17.73 14.56 18.72C14.56 20.13 14.55 21.17 14.55 21.49C14.55 21.76 14.73 22.09 15.24 21.98C19.21 20.62 22.08 16.78 22.08 12.25C22.08 6.59 17.6 2 12 2Z"
                  fill="currentColor"
                />
              </svg>
            </a>
          </div>
        </div>
      </header>

      <main className={styles["main"]}>
        <div className={styles["container"]}>{children}</div>
      </main>
    </div>
  );
};

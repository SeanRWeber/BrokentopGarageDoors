/**
 * Layout component - Single Responsibility: Page layout wrapper
 * Pure function, consistent structure
 */

import { Meta } from './meta.ts';
import { Schema } from './schema.ts';
import { Header } from './header.ts';
import { Footer } from './footer.ts';

interface LayoutProps {
  readonly title: string;
  readonly description: string;
  readonly content: string;
  readonly path?: string;
}

export const Layout = ({ title, description, content, path }: LayoutProps): string => `
<!DOCTYPE html>
<html lang="en">
<head>
  ${Meta({ title, description, path })}
  ${Schema()}
  <link rel="stylesheet" href="/styles.css">
</head>
<body>
  ${Header()}
  <main>${content}</main>
  ${Footer()}
  <script src="/app.js"></script>
</body>
</html>`.trim();

/**
 * Layout component - Single Responsibility: Page layout wrapper
 * Pure function, consistent structure, includes Google Fonts
 */

import { Meta } from './meta';
import { Schema } from './schema';
import { Fonts } from './fonts';
import { UtilityBar } from './utilitybar';
import { Header } from './header';
import { Footer } from './footer';

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
  ${Meta({ title, description, ...(path !== undefined && { path }) })}
  ${Schema()}
  ${Fonts()}
  <link rel="stylesheet" href="/styles.css">
</head>
<body>
  ${UtilityBar()}
  ${Header()}
  <main>${content}</main>
  ${Footer()}
  <script src="/app.js"></script>
</body>
</html>`.trim();

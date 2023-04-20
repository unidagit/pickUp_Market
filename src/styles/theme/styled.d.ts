import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    text: {
      error: string;
      lighter: string;
    };
    main: {
      primary: string;
    };
    white: {
      primary: string;
    };
    sub: {
      darker: string;
      lighter: string;
      verylighter: string;
      primary: string;
    };
  }
}

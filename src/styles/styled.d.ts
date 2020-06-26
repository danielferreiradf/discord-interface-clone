import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      primary: string;
      secondary: string;
      tertiary: string;
      quaternary: string;
      quinary: string;
      senary: string;

      white: string;
      gray: string;
      chatInput: string;
      symbol: string;

      notification: string;
      discord: string;
      mentionDetail: string;
      mentionMessage: string;

      link: string;

      purple: string;
    };
  }
}

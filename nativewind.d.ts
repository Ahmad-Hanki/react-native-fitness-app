import "react-native";

declare module "react-native" {
  interface ViewProps {
    className?: string;
  }
  interface TextProps {
    className?: string;
  }
  interface ImageProps {
    className?: string;
  }
  interface ScrollViewProps {
    className?: string;
  }
  interface TouchableOpacityProps {
    className?: string;
  }
  interface StatusBarProps {
    className?: string;
  }

  declare module "*.png" {
    const value: string;
    export default value;
  }

  declare module "*.jpg" {
    const value: string;
    export default value;
  }

  declare module "*.jpeg" {
    const value: string;
    export default value;
  }

  declare module "*.gif" {
    const value: string;
    export default value;
  }

  declare module "*.svg" {
    const content: any;
    export default content;
  }

  declare module "*.bmp" {
    const value: string;
    export default value;
  }

  declare module "*.tiff" {
    const value: string;
    export default value;
  }

  // Add similar declarations for other components as needed
}


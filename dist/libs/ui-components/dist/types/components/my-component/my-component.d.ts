import { EventEmitter } from "../../stencil-public-runtime";
export declare class MyComponent {
  /**
   * The first name
   */
  first: string;
  /**
   * The middle names
   */
  middle: string[];
  /**
   * The last name
   */
  last: string;
  /**
   * A custom named click handler
   */
  nameClicked: EventEmitter<string>;
  render(): any;
  private getText;
}

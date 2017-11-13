import * as React from "react";

export interface ApiErrorsProps {
  errors: { validation: boolean; errors: {} };
}

export class ApiErrors extends React.Component<ApiErrorsProps> {
  parseApiErrors(): Array<string> {
    let errors: Array<string> = null;

    if (this.props.errors) {
      if (this.props.errors.validation) {
        errors = Object.keys(this.props.errors.errors).map(
          key => this.props.errors.errors[key].error
        );
      } else {
        errors = this.props.errors.errors as Array<string>;
      }
    }

    return errors;
  }
  render() {
    const errors: Array<string> = this.parseApiErrors();

    return (
      <div className="has-error">
        {errors ? (
          errors.map((error: string, id: number) => <span key={id}>{error} <br /></span>)
        ) : null}
      </div>
    );
  }
}
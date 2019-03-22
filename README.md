# handle-translations

A scheme for handling translating hard-coded elements.

## Usage

    import getTranslation from "../translations/translations";

    let translate = getTranslation("default");

In ComponentWillMount()

    // get translations
    if (this.props.language) {
        translate = getTranslation(this.props.language);
    }
    else {
        translate = getTranslation("default");
    }

In use

    <Button className="cancel-button" onClick={this.props.cancelMethod}>{translate.Cancel}</Button>

## Best practices

Keep translation object sorted alphabetically.
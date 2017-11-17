# accordionAllToggle

Accordion with click event to toggle child by child.
If another parent element is selected then all other nodes of elements become toggle

# Example

```code

accordionAllToggle(clickElement, nextElement, untilElement);

clickElement: "Path to the clickable element"
nextElement: "Select next child element to find. Using tag element only or this '> ' with tag element. - Information: classes can be also uses"
untilElement: "Select all next child elements with a toggle method. - Information: classes can be also uses"

With testing parameter
accordionAllToggle('div li','ul','li');  
accordionAllToggle('div li','> ul','li');  

# HTML Source Code - Example

<div>
    <ul>
        <li>
            <p>1. Child</p>
            <ul style="display: none">
                <li>
                    <p>1.1 Child</p>
                </li>
                <li>
                    <p>1.2. Child</p>
                </li>
            </ul>
        </li>
        <li>
            <p>2. Child</p>
        </li>
        <li>
            <p>3. Child</p>
            <ul style="display: none">
                <li>
                    <p>3.1. Child</p>
                    <ul style="display: none">
                        <li>
                            <p>3.1.1. Child</p>
                        </li>
                        <li>
                            <p>3.1.2. Child</p>
                        </li>
                    </ul>
                </li>
                <li>
                    <p>3.2. Child</p>
                    <ul style="display: none">
                        <li>
                            <p>3.2.1. Child</p>
                            <ul style="display: none">
                                <li>
                                    <p>3.2.1.1. Child</p>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </li>
            </ul>
        </li>
    </ul>
</div>
```
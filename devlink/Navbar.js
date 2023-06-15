import React from "react";
import * as _Builtin from "./_Builtin";
import * as _interactions from "./interactions";
import * as _utils from "./utils";
import _styles from "./Navbar.module.css";

const _interactionsData = JSON.parse(
  '{"events":{"e-7":{"id":"e-7","name":"","animationType":"custom","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-7","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-8"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".a-navlogo","originalId":"99d38404-d1fc-9e71-8748-bf39138affb3","appliesTo":"CLASS"},"targets":[{"selector":".a-navlogo","originalId":"99d38404-d1fc-9e71-8748-bf39138affb3","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1552139475593},"e-8":{"id":"e-8","name":"","animationType":"custom","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-8","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-7"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".a-navlogo","originalId":"99d38404-d1fc-9e71-8748-bf39138affb3","appliesTo":"CLASS"},"targets":[{"selector":".a-navlogo","originalId":"99d38404-d1fc-9e71-8748-bf39138affb3","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1552139475593},"e-55":{"id":"e-55","name":"","animationType":"custom","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-17","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-56"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".a-navlogo","originalId":"648a17b3d09858d6b341d4d4|06d96ecf-445f-f228-f3a8-3fb19d4114ac","appliesTo":"CLASS"},"targets":[{"selector":".a-navlogo","originalId":"648a17b3d09858d6b341d4d4|06d96ecf-445f-f228-f3a8-3fb19d4114ac","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1552696833808},"e-56":{"id":"e-56","name":"","animationType":"custom","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-18","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-55"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".a-navlogo","originalId":"648a17b3d09858d6b341d4d4|06d96ecf-445f-f228-f3a8-3fb19d4114ac","appliesTo":"CLASS"},"targets":[{"selector":".a-navlogo","originalId":"648a17b3d09858d6b341d4d4|06d96ecf-445f-f228-f3a8-3fb19d4114ac","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1552696833808},"e-57":{"id":"e-57","name":"","animationType":"custom","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-19","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-58"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".a-navbardropdown","originalId":"648a17b3d09858d6b341d4d4|6dbf11e6-42c0-c31e-e594-4c4a3482e7c9","appliesTo":"CLASS"},"targets":[{"selector":".a-navbardropdown","originalId":"648a17b3d09858d6b341d4d4|6dbf11e6-42c0-c31e-e594-4c4a3482e7c9","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1552698974572},"e-58":{"id":"e-58","name":"","animationType":"custom","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-20","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-57"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".a-navbardropdown","originalId":"648a17b3d09858d6b341d4d4|6dbf11e6-42c0-c31e-e594-4c4a3482e7c9","appliesTo":"CLASS"},"targets":[{"selector":".a-navbardropdown","originalId":"648a17b3d09858d6b341d4d4|6dbf11e6-42c0-c31e-e594-4c4a3482e7c9","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1552698974573},"e-59":{"id":"e-59","name":"","animationType":"custom","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-21","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-60"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".a-navdropdownlink","originalId":"648a17b3d09858d6b341d4d4|b0b35588-5c7e-29c8-868d-712e879caeaa","appliesTo":"CLASS"},"targets":[{"selector":".a-navdropdownlink","originalId":"648a17b3d09858d6b341d4d4|b0b35588-5c7e-29c8-868d-712e879caeaa","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1552700724531},"e-60":{"id":"e-60","name":"","animationType":"custom","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-22","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-59"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".a-navdropdownlink","originalId":"648a17b3d09858d6b341d4d4|b0b35588-5c7e-29c8-868d-712e879caeaa","appliesTo":"CLASS"},"targets":[{"selector":".a-navdropdownlink","originalId":"648a17b3d09858d6b341d4d4|b0b35588-5c7e-29c8-868d-712e879caeaa","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1552700724533},"e-143":{"id":"e-143","name":"","animationType":"custom","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-10","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-144"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"99d38404-d1fc-9e71-8748-bf39138affbe","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"99d38404-d1fc-9e71-8748-bf39138affbe","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1557306970786},"e-438":{"id":"e-438","name":"","animationType":"custom","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-86","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-439"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".a-navlogo","originalId":"648a17b3d09858d6b341d552|f272373f-032d-2406-0c7e-ee2fa7c61c41","appliesTo":"CLASS"},"targets":[{"selector":".a-navlogo","originalId":"648a17b3d09858d6b341d552|f272373f-032d-2406-0c7e-ee2fa7c61c41","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1573508986778},"e-439":{"id":"e-439","name":"","animationType":"custom","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-87","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-438"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".a-navlogo","originalId":"648a17b3d09858d6b341d552|f272373f-032d-2406-0c7e-ee2fa7c61c41","appliesTo":"CLASS"},"targets":[{"selector":".a-navlogo","originalId":"648a17b3d09858d6b341d552|f272373f-032d-2406-0c7e-ee2fa7c61c41","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1573508986778},"e-440":{"id":"e-440","name":"","animationType":"custom","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-89","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-441"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".a-navlogo","originalId":"648a17b3d09858d6b341d552|fb12ba66-9711-9dc3-8a79-6a0331c63c46","appliesTo":"CLASS"},"targets":[{"selector":".a-navlogo","originalId":"648a17b3d09858d6b341d552|fb12ba66-9711-9dc3-8a79-6a0331c63c46","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1573509216496},"e-441":{"id":"e-441","name":"","animationType":"custom","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-90","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-440"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".a-navlogo","originalId":"648a17b3d09858d6b341d552|fb12ba66-9711-9dc3-8a79-6a0331c63c46","appliesTo":"CLASS"},"targets":[{"selector":".a-navlogo","originalId":"648a17b3d09858d6b341d552|fb12ba66-9711-9dc3-8a79-6a0331c63c46","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1573509216496}},"actionLists":{"a-7":{"id":"a-7","title":"Nav Logo Hover In","actionItemGroups":[{"actionItems":[{"id":"a-7-n","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"ease","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".a-sunlightlogoicon","selectorGuids":["3d4de8d0-ad16-04ae-eb53-ba03f5874458"]},"zValue":90,"xUnit":"DEG","yUnit":"DEG","zUnit":"DEG"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1552139480885},"a-8":{"id":"a-8","title":"Nav Logo Hover Out","actionItemGroups":[{"actionItems":[{"id":"a-8-n","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"ease","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".a-sunlightlogoicon","selectorGuids":["3d4de8d0-ad16-04ae-eb53-ba03f5874458"]},"zValue":0,"xUnit":"DEG","yUnit":"DEG","zUnit":"DEG"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1552139560790},"a-17":{"id":"a-17","title":"Nav Logo Hover In 2","actionItemGroups":[{"actionItems":[{"id":"a-17-n","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"ease","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".a-sunlightlogoicon","selectorGuids":["3d4de8d0-ad16-04ae-eb53-ba03f5874458"]},"zValue":90,"xUnit":"DEG","yUnit":"DEG","zUnit":"DEG"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1552139480885},"a-18":{"id":"a-18","title":"Nav Logo Hover Out 2","actionItemGroups":[{"actionItems":[{"id":"a-18-n","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"ease","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".a-sunlightlogoicon","selectorGuids":["3d4de8d0-ad16-04ae-eb53-ba03f5874458"]},"zValue":0,"xUnit":"DEG","yUnit":"DEG","zUnit":"DEG"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1552139560790},"a-19":{"id":"a-19","title":"View Dropdown","actionItemGroups":[{"actionItems":[{"id":"a-19-n-4","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".a-navbardropdowncontainer","selectorGuids":["72fb44d7-1838-c229-f40a-aeb79d56b723"]},"value":0,"unit":""}},{"id":"a-19-n-5","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".a-navbardropdowncontainer","selectorGuids":["72fb44d7-1838-c229-f40a-aeb79d56b723"]},"value":"none"}},{"id":"a-19-n-6","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".a-navbardropdowncontainer","selectorGuids":["72fb44d7-1838-c229-f40a-aeb79d56b723"]},"yValue":40,"xUnit":"PX","yUnit":"PX","zUnit":"PX"}}]},{"actionItems":[{"id":"a-19-n","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".a-navbardropdowncontainer","selectorGuids":["72fb44d7-1838-c229-f40a-aeb79d56b723"]},"value":"block"}},{"id":"a-19-n-2","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"ease","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".a-navbardropdowncontainer","selectorGuids":["72fb44d7-1838-c229-f40a-aeb79d56b723"]},"yValue":0,"xUnit":"PX","yUnit":"PX","zUnit":"PX"}},{"id":"a-19-n-3","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"ease","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".a-navbardropdowncontainer","selectorGuids":["72fb44d7-1838-c229-f40a-aeb79d56b723"]},"value":1,"unit":""}}]}],"useFirstGroupAsInitialState":true,"createdOn":1552697390522},"a-20":{"id":"a-20","title":"Hide Dropdown","actionItemGroups":[{"actionItems":[{"id":"a-20-n-3","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"ease","duration":300,"target":{"selector":".a-navbardropdowncontainer","selectorGuids":["72fb44d7-1838-c229-f40a-aeb79d56b723"]},"yValue":40,"xUnit":"PX","yUnit":"PX","zUnit":"PX"}},{"id":"a-20-n-4","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"ease","duration":300,"target":{"selector":".a-navbardropdowncontainer","selectorGuids":["72fb44d7-1838-c229-f40a-aeb79d56b723"]},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-20-n-2","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".a-navbardropdowncontainer","selectorGuids":["72fb44d7-1838-c229-f40a-aeb79d56b723"]},"value":"none"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1552697419459},"a-21":{"id":"a-21","title":"Dropdown Link Hover","actionItemGroups":[{"actionItems":[{"id":"a-21-n","actionTypeId":"TRANSFORM_SCALE","config":{"delay":0,"easing":"ease","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".a-navdropdownicon","selectorGuids":["6bd8b045-fd7b-cd3f-cd9e-f988925803ee"]},"xValue":1.2,"yValue":1.2,"locked":true}}]}],"useFirstGroupAsInitialState":false,"createdOn":1552700729637},"a-22":{"id":"a-22","title":"Dropdown Link Hover Out","actionItemGroups":[{"actionItems":[{"id":"a-22-n","actionTypeId":"TRANSFORM_SCALE","config":{"delay":0,"easing":"ease","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".a-navdropdownicon","selectorGuids":["6bd8b045-fd7b-cd3f-cd9e-f988925803ee"]},"xValue":1,"yValue":1,"locked":true}}]}],"useFirstGroupAsInitialState":false,"createdOn":1552700776332},"a-10":{"id":"a-10","title":"Open Modal","actionItemGroups":[{"actionItems":[{"id":"a-10-n-6","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".a-modal","selectorGuids":["2b7d15af-1b6a-9911-9b71-06f42a477b23"]},"value":0,"unit":""}},{"id":"a-10-n-7","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".a-modal","selectorGuids":["2b7d15af-1b6a-9911-9b71-06f42a477b23"]},"value":"none"}},{"id":"a-10-n-8","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".a-modalcard","selectorGuids":["dfafbf07-7e82-3b23-7a7c-6dd69cb39dce"]},"xValue":0,"yValue":200,"xUnit":"PX","yUnit":"PX","zUnit":"PX"}},{"id":"a-10-n-9","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".a-modalcard","selectorGuids":["dfafbf07-7e82-3b23-7a7c-6dd69cb39dce"]},"value":0,"unit":""}},{"id":"a-10-n-10","actionTypeId":"TRANSFORM_SCALE","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".a-closemodalbutton","selectorGuids":["c87c18c4-067a-20a7-7891-57b792bc8311"]},"xValue":0,"yValue":0,"locked":true}}]},{"actionItems":[{"id":"a-10-n","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".a-modal","selectorGuids":["2b7d15af-1b6a-9911-9b71-06f42a477b23"]},"value":"flex"}},{"id":"a-10-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"ease","duration":400,"target":{"selector":".a-modal","selectorGuids":["2b7d15af-1b6a-9911-9b71-06f42a477b23"]},"value":1,"unit":""}},{"id":"a-10-n-3","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"ease","duration":400,"target":{"selector":".a-modalcard","selectorGuids":["dfafbf07-7e82-3b23-7a7c-6dd69cb39dce"]},"xValue":0,"yValue":0,"xUnit":"PX","yUnit":"PX","zUnit":"PX"}},{"id":"a-10-n-5","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"ease","duration":400,"target":{"selector":".a-modalcard","selectorGuids":["dfafbf07-7e82-3b23-7a7c-6dd69cb39dce"]},"value":1,"unit":""}}]},{"actionItems":[{"id":"a-10-n-4","actionTypeId":"TRANSFORM_SCALE","config":{"delay":0,"easing":"ease","duration":300,"target":{"selector":".a-closemodalbutton","selectorGuids":["c87c18c4-067a-20a7-7891-57b792bc8311"]},"xValue":1,"yValue":1,"locked":true}}]}],"useFirstGroupAsInitialState":true,"createdOn":1552302419161},"a-86":{"id":"a-86","title":"Nav Logo Hover In 3","actionItemGroups":[{"actionItems":[{"id":"a-86-n","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"ease","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".a-sunlightlogoicon","selectorGuids":["3d4de8d0-ad16-04ae-eb53-ba03f5874458"]},"zValue":90,"xUnit":"DEG","yUnit":"DEG","zUnit":"DEG"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1552139480885},"a-87":{"id":"a-87","title":"Nav Logo Hover Out 3","actionItemGroups":[{"actionItems":[{"id":"a-87-n","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"ease","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".a-sunlightlogoicon","selectorGuids":["3d4de8d0-ad16-04ae-eb53-ba03f5874458"]},"zValue":0,"xUnit":"DEG","yUnit":"DEG","zUnit":"DEG"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1552139560790},"a-89":{"id":"a-89","title":"Nav Logo Hover In 4","actionItemGroups":[{"actionItems":[{"id":"a-89-n","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"ease","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".a-sunlightlogoicon","selectorGuids":["3d4de8d0-ad16-04ae-eb53-ba03f5874458"]},"zValue":90,"xUnit":"DEG","yUnit":"DEG","zUnit":"DEG"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1552139480885},"a-90":{"id":"a-90","title":"Nav Logo Hover Out 4","actionItemGroups":[{"actionItems":[{"id":"a-90-n","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"ease","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".a-sunlightlogoicon","selectorGuids":["3d4de8d0-ad16-04ae-eb53-ba03f5874458"]},"zValue":0,"xUnit":"DEG","yUnit":"DEG","zUnit":"DEG"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1552139560790}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function Navbar({ as: _Component = _Builtin.Block }) {
  _interactions.useInteractions(_interactionsData, _styles);

  return (
    <_Component className={_utils.cx(_styles, "a-nav")} tag="div">
      <_Builtin.Block className={_utils.cx(_styles, "a-navleft")} tag="div">
        <_Builtin.Link
          className={_utils.cx(_styles, "a-navlogo")}
          button={false}
          options={{
            href: "#",
          }}
        >
          <_Builtin.Image
            className={_utils.cx(_styles, "a-sunlightlogoicon")}
            width="auto"
            height="auto"
            loading="auto"
            src="https://uploads-ssl.webflow.com/648a17b3d09858d6b341d4d6/648a17b3d09858d6b341d541_Sunlight%20Icon.svg"
          />
          <_Builtin.Image
            className={_utils.cx(_styles, "a-navlogotype")}
            width="auto"
            height="auto"
            loading="auto"
            src="https://uploads-ssl.webflow.com/648a17b3d09858d6b341d4d6/648a17b3d09858d6b341d6b8_Sunlight%20Logo.svg"
          />
        </_Builtin.Link>
        <_Builtin.Block
          className={_utils.cx(_styles, "a-navbardropdown")}
          tag="div"
        >
          <_Builtin.Link
            className={_utils.cx(_styles, "a-navlink")}
            button={false}
            options={{
              href: "#",
            }}
          >
            {"Product"}
          </_Builtin.Link>
          <_Builtin.Block
            className={_utils.cx(_styles, "a-navbardropdowncontainer")}
            tag="div"
          >
            <_Builtin.Block
              className={_utils.cx(_styles, "a-navbardropdownmenu")}
              tag="div"
            >
              <_Builtin.Link
                className={_utils.cx(
                  _styles,
                  "a-navdropdownlink",
                  "paddingleft"
                )}
                button={false}
                options={{
                  href: "#",
                }}
              >
                <_Builtin.Block
                  className={_utils.cx(_styles, "a-navdropdownicon")}
                  tag="div"
                >
                  <_Builtin.Image
                    width="auto"
                    height="auto"
                    loading="auto"
                    src="https://uploads-ssl.webflow.com/648a17b3d09858d6b341d4d6/648a17b3d09858d6b341d549_How%20it%20works.svg"
                  />
                </_Builtin.Block>
                <_Builtin.Block
                  className={_utils.cx(_styles, "a-navdropdownlinktitle")}
                  tag="div"
                >
                  {"How it works"}
                </_Builtin.Block>
                <_Builtin.Block
                  className={_utils.cx(_styles, "a-navdropdownlinkdescription")}
                  tag="div"
                >
                  {
                    "Check out our demo video and find out more about all our features."
                  }
                </_Builtin.Block>
              </_Builtin.Link>
              <_Builtin.Link
                className={_utils.cx(_styles, "a-navdropdownlink")}
                button={false}
                options={{
                  href: "#",
                }}
              >
                <_Builtin.Block
                  className={_utils.cx(_styles, "a-navdropdownicon")}
                  tag="div"
                >
                  <_Builtin.Image
                    width="auto"
                    height="auto"
                    loading="auto"
                    src="https://uploads-ssl.webflow.com/648a17b3d09858d6b341d4d6/648a17b3d09858d6b341d707_Security.svg"
                  />
                </_Builtin.Block>
                <_Builtin.Block
                  className={_utils.cx(_styles, "a-navdropdownlinktitle")}
                  tag="div"
                >
                  {"Security &Privacy"}
                </_Builtin.Block>
                <_Builtin.Block
                  className={_utils.cx(_styles, "a-navdropdownlinkdescription")}
                  tag="div"
                >
                  {
                    "We're committed to offering industry leading privacy and security measures."
                  }
                </_Builtin.Block>
              </_Builtin.Link>
              <_Builtin.Link
                className={_utils.cx(_styles, "a-navdropdownlink")}
                button={false}
                options={{
                  href: "#",
                }}
              >
                <_Builtin.Block
                  className={_utils.cx(_styles, "a-navdropdownicon")}
                  tag="div"
                >
                  <_Builtin.Image
                    width="auto"
                    height="auto"
                    loading="auto"
                    src="https://uploads-ssl.webflow.com/648a17b3d09858d6b341d4d6/648a17b3d09858d6b341d666_Updates.svg"
                  />
                </_Builtin.Block>
                <_Builtin.Block
                  className={_utils.cx(_styles, "a-navdropdownlinktitle")}
                  tag="div"
                >
                  {"Updates"}
                </_Builtin.Block>
                <_Builtin.Block
                  className={_utils.cx(_styles, "a-navdropdownlinkdescription")}
                  tag="div"
                >
                  {
                    "We release updates and improvements every few days. Here they are."
                  }
                </_Builtin.Block>
              </_Builtin.Link>
              <_Builtin.Link
                className={_utils.cx(
                  _styles,
                  "a-navdropdownlink",
                  "paddingright"
                )}
                button={false}
                options={{
                  href: "#",
                }}
              >
                <_Builtin.Block
                  className={_utils.cx(_styles, "a-navdropdownicon")}
                  tag="div"
                >
                  <_Builtin.Image
                    width="auto"
                    height="auto"
                    loading="auto"
                    src="https://uploads-ssl.webflow.com/648a17b3d09858d6b341d4d6/648a17b3d09858d6b341d548_Providers.svg"
                  />
                </_Builtin.Block>
                <_Builtin.Block
                  className={_utils.cx(_styles, "a-navdropdownlinktitle")}
                  tag="div"
                >
                  {"Providers"}
                </_Builtin.Block>
                <_Builtin.Block
                  className={_utils.cx(_styles, "a-navdropdownlinkdescription")}
                  tag="div"
                >
                  {
                    "Sunlight works with any provider in the world. Here are some of the most popular ones."
                  }
                </_Builtin.Block>
              </_Builtin.Link>
            </_Builtin.Block>
          </_Builtin.Block>
        </_Builtin.Block>
        <_Builtin.Link
          className={_utils.cx(_styles, "a-navlink")}
          button={false}
          options={{
            href: "#",
          }}
        >
          {"Customers"}
        </_Builtin.Link>
        <_Builtin.Block
          className={_utils.cx(_styles, "a-navbardropdown")}
          tag="div"
        >
          <_Builtin.Block
            className={_utils.cx(_styles, "a-navlink", "usescases")}
            tag="div"
          >
            {"Use cases"}
          </_Builtin.Block>
          <_Builtin.Block
            className={_utils.cx(_styles, "a-navbardropdowncontainer", "cases")}
            tag="div"
          >
            <_Builtin.Block
              className={_utils.cx(_styles, "a-navbardropdownmenu")}
              tag="div"
            >
              <_Builtin.Link
                className={_utils.cx(_styles, "a-navdropdownlink")}
                button={false}
                options={{
                  href: "#",
                }}
              >
                <_Builtin.Block
                  className={_utils.cx(_styles, "a-navdropdownicon")}
                  tag="div"
                >
                  <_Builtin.Image
                    width="auto"
                    height="auto"
                    loading="auto"
                    src="https://uploads-ssl.webflow.com/648a17b3d09858d6b341d4d6/648a17b3d09858d6b341d63e_Managers%20-%20Sunlight.png"
                  />
                </_Builtin.Block>
                <_Builtin.Block
                  className={_utils.cx(_styles, "a-navdropdownlinktitle")}
                  tag="div"
                >
                  {"For Managers"}
                </_Builtin.Block>
                <_Builtin.Block
                  className={_utils.cx(_styles, "a-navdropdownlinkdescription")}
                  tag="div"
                >
                  {
                    "Enabling managers to give the gift of learning to their team members and seamlessly support their personal and professional growth"
                  }
                </_Builtin.Block>
              </_Builtin.Link>
              <_Builtin.Link
                className={_utils.cx(_styles, "a-navdropdownlink")}
                button={false}
                options={{
                  href: "#",
                }}
              >
                <_Builtin.Block
                  className={_utils.cx(_styles, "a-navdropdownicon")}
                  tag="div"
                >
                  <_Builtin.Image
                    width="auto"
                    height="auto"
                    loading="auto"
                    src="https://uploads-ssl.webflow.com/648a17b3d09858d6b341d4d6/648a17b3d09858d6b341d695_SMB%20-%20Sunlight.png"
                  />
                </_Builtin.Block>
                <_Builtin.Block
                  className={_utils.cx(_styles, "a-navdropdownlinktitle")}
                  tag="div"
                >
                  {"For Startups"}
                </_Builtin.Block>
                <_Builtin.Block
                  className={_utils.cx(_styles, "a-navdropdownlinkdescription")}
                  tag="div"
                >
                  {
                    "Helping fast-growing startups build a culture of learning through plug and play solutions"
                  }
                </_Builtin.Block>
              </_Builtin.Link>
              <_Builtin.Link
                className={_utils.cx(
                  _styles,
                  "a-navdropdownlink",
                  "paddingleft"
                )}
                button={false}
                options={{
                  href: "#",
                }}
              >
                <_Builtin.Block
                  className={_utils.cx(_styles, "a-navdropdownicon")}
                  tag="div"
                >
                  <_Builtin.Image
                    width="auto"
                    height="auto"
                    loading="auto"
                    src="https://uploads-ssl.webflow.com/648a17b3d09858d6b341d4d6/648a17b3d09858d6b341d6dd_ERG%20-%20Sunlight.png"
                  />
                </_Builtin.Block>
                <_Builtin.Block
                  className={_utils.cx(_styles, "a-navdropdownlinktitle")}
                  tag="div"
                >
                  {"For Employee Resource Groups"}
                </_Builtin.Block>
                <_Builtin.Block
                  className={_utils.cx(_styles, "a-navdropdownlinkdescription")}
                  tag="div"
                >
                  {
                    "Transforming ERGs into dynamic learning communities built to recognize and professionally develop their members"
                  }
                </_Builtin.Block>
              </_Builtin.Link>
              <_Builtin.Link
                className={_utils.cx(
                  _styles,
                  "a-navdropdownlink",
                  "paddingright",
                  "cases"
                )}
                button={false}
                options={{
                  href: "#",
                }}
              >
                <_Builtin.Block
                  className={_utils.cx(_styles, "a-navdropdownicon")}
                  tag="div"
                >
                  <_Builtin.Image
                    width="auto"
                    height="auto"
                    loading="auto"
                    src="https://uploads-ssl.webflow.com/648a17b3d09858d6b341d4d6/648a17b3d09858d6b341d6dc_Re-skill%20-%20Sunlight.png"
                  />
                </_Builtin.Block>
                <_Builtin.Block
                  className={_utils.cx(_styles, "a-navdropdownlinktitle")}
                  tag="div"
                >
                  {"For Re-skilling Workforce"}
                </_Builtin.Block>
                <_Builtin.Block
                  className={_utils.cx(_styles, "a-navdropdownlinkdescription")}
                  tag="div"
                >
                  {
                    "Sunlight works with any provider in the world. Here are some of the most popular ones."
                  }
                </_Builtin.Block>
              </_Builtin.Link>
            </_Builtin.Block>
          </_Builtin.Block>
        </_Builtin.Block>
        <_Builtin.Link
          className={_utils.cx(_styles, "a-navlink")}
          button={false}
          options={{
            href: "#",
          }}
        >
          {"Pricing"}
        </_Builtin.Link>
        <_Builtin.Link
          className={_utils.cx(_styles, "a-navlink")}
          button={false}
          options={{
            href: "#",
          }}
        >
          {"Blog"}
        </_Builtin.Link>
      </_Builtin.Block>
      <_Builtin.Block className={_utils.cx(_styles, "a-navright")} tag="div">
        <_Builtin.Link
          className={_utils.cx(_styles, "a-navlink")}
          button={false}
          options={{
            href: "http://grow.sunlight.is",
          }}
        >
          {"Log In"}
        </_Builtin.Link>
        <_Builtin.Link
          className={_utils.cx(_styles, "a-navlink")}
          data-w-id="99d38404-d1fc-9e71-8748-bf39138affbe"
          button={false}
          options={{
            href: "#",
          }}
        >
          {"Get Started"}
        </_Builtin.Link>
      </_Builtin.Block>
    </_Component>
  );
}

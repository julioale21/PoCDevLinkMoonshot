import React from "react";
import * as _Builtin from "./_Builtin";
import * as _interactions from "./interactions";
import * as _utils from "./utils";
import _styles from "./Footer.module.css";

const _interactionsData = JSON.parse(
  '{"events":{"e":{"id":"e","name":"","animationType":"custom","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-2"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".a-footerpostcard","originalId":"7f976641-3e00-a427-2f21-4cb8caa6c7b1","appliesTo":"CLASS"},"targets":[{"selector":".a-footerpostcard","originalId":"7f976641-3e00-a427-2f21-4cb8caa6c7b1","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1552131409217},"e-2":{"id":"e-2","name":"","animationType":"custom","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-2","affectedElements":{},"playInReverse":false,"autoStopEventId":"e"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".a-footerpostcard","originalId":"7f976641-3e00-a427-2f21-4cb8caa6c7b1","appliesTo":"CLASS"},"targets":[{"selector":".a-footerpostcard","originalId":"7f976641-3e00-a427-2f21-4cb8caa6c7b1","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1552131409218},"e-246":{"id":"e-246","name":"","animationType":"custom","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-45","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-247"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".a-footerpostcard","originalId":"648a17b3d09858d6b341d513|4a7261a0-0237-8ef3-11d6-c76229104ddd","appliesTo":"CLASS"},"targets":[{"selector":".a-footerpostcard","originalId":"648a17b3d09858d6b341d513|4a7261a0-0237-8ef3-11d6-c76229104ddd","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1565769579205},"e-247":{"id":"e-247","name":"","animationType":"custom","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-46","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-246"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".a-footerpostcard","originalId":"648a17b3d09858d6b341d513|4a7261a0-0237-8ef3-11d6-c76229104ddd","appliesTo":"CLASS"},"targets":[{"selector":".a-footerpostcard","originalId":"648a17b3d09858d6b341d513|4a7261a0-0237-8ef3-11d6-c76229104ddd","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1565769579205},"e-436":{"id":"e-436","name":"","animationType":"custom","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-84","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-437"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".a-footerpostcard","originalId":"648a17b3d09858d6b341d552|a35c7882-a664-d1ec-d8d3-09f7e85d72c7","appliesTo":"CLASS"},"targets":[{"selector":".a-footerpostcard","originalId":"648a17b3d09858d6b341d552|a35c7882-a664-d1ec-d8d3-09f7e85d72c7","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1573508768184},"e-437":{"id":"e-437","name":"","animationType":"custom","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-85","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-436"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".a-footerpostcard","originalId":"648a17b3d09858d6b341d552|a35c7882-a664-d1ec-d8d3-09f7e85d72c7","appliesTo":"CLASS"},"targets":[{"selector":".a-footerpostcard","originalId":"648a17b3d09858d6b341d552|a35c7882-a664-d1ec-d8d3-09f7e85d72c7","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1573508768184}},"actionLists":{"a":{"id":"a","title":"Post Card Hover In","actionItemGroups":[{"actionItems":[{"id":"a-n","actionTypeId":"TRANSFORM_SCALE","config":{"delay":0,"easing":"ease","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".a-footerpostcardbackground","selectorGuids":["f5f7c31e-71f8-5bdd-9ad0-3a2897d5ab41"]},"xValue":1.2,"yValue":1.2,"locked":true}},{"id":"a-n-2","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"ease","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".a-footerpostcontent","selectorGuids":["c56dcee5-fa4a-9f17-587a-ca6bd25073f0"]},"yValue":-15,"xUnit":"PX","yUnit":"PX","zUnit":"PX"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1552131248981},"a-2":{"id":"a-2","title":"Post Card Hover Out","actionItemGroups":[{"actionItems":[{"id":"a-2-n","actionTypeId":"TRANSFORM_SCALE","config":{"delay":0,"easing":"ease","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".a-footerpostcardbackground","selectorGuids":["f5f7c31e-71f8-5bdd-9ad0-3a2897d5ab41"]},"xValue":1,"yValue":1,"locked":true}},{"id":"a-2-n-2","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"ease","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".a-footerpostcontent","selectorGuids":["c56dcee5-fa4a-9f17-587a-ca6bd25073f0"]},"xValue":0,"yValue":0,"xUnit":"PX","yUnit":"PX","zUnit":"PX"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1552131539407},"a-45":{"id":"a-45","title":"Post Card Hover In 2","actionItemGroups":[{"actionItems":[{"id":"a-45-n","actionTypeId":"TRANSFORM_SCALE","config":{"delay":0,"easing":"ease","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".a-footerpostcardbackground","selectorGuids":["f5f7c31e-71f8-5bdd-9ad0-3a2897d5ab41"]},"xValue":1.2,"yValue":1.2,"locked":true}},{"id":"a-45-n-2","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"ease","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".a-footerpostcontent","selectorGuids":["c56dcee5-fa4a-9f17-587a-ca6bd25073f0"]},"yValue":-15,"xUnit":"PX","yUnit":"PX","zUnit":"PX"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1552131248981},"a-46":{"id":"a-46","title":"Post Card Hover Out 2","actionItemGroups":[{"actionItems":[{"id":"a-46-n","actionTypeId":"TRANSFORM_SCALE","config":{"delay":0,"easing":"ease","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".a-footerpostcardbackground","selectorGuids":["f5f7c31e-71f8-5bdd-9ad0-3a2897d5ab41"]},"xValue":1,"yValue":1,"locked":true}},{"id":"a-46-n-2","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"ease","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".a-footerpostcontent","selectorGuids":["c56dcee5-fa4a-9f17-587a-ca6bd25073f0"]},"xValue":0,"yValue":0,"xUnit":"PX","yUnit":"PX","zUnit":"PX"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1552131539407},"a-84":{"id":"a-84","title":"Post Card Hover In 3","actionItemGroups":[{"actionItems":[{"id":"a-84-n","actionTypeId":"TRANSFORM_SCALE","config":{"delay":0,"easing":"ease","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".a-footerpostcardbackground","selectorGuids":["f5f7c31e-71f8-5bdd-9ad0-3a2897d5ab41"]},"xValue":1.2,"yValue":1.2,"locked":true}},{"id":"a-84-n-2","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"ease","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".a-footerpostcontent","selectorGuids":["c56dcee5-fa4a-9f17-587a-ca6bd25073f0"]},"yValue":-15,"xUnit":"PX","yUnit":"PX","zUnit":"PX"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1552131248981},"a-85":{"id":"a-85","title":"Post Card Hover Out 3","actionItemGroups":[{"actionItems":[{"id":"a-85-n","actionTypeId":"TRANSFORM_SCALE","config":{"delay":0,"easing":"ease","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".a-footerpostcardbackground","selectorGuids":["f5f7c31e-71f8-5bdd-9ad0-3a2897d5ab41"]},"xValue":1,"yValue":1,"locked":true}},{"id":"a-85-n-2","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"ease","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".a-footerpostcontent","selectorGuids":["c56dcee5-fa4a-9f17-587a-ca6bd25073f0"]},"xValue":0,"yValue":0,"xUnit":"PX","yUnit":"PX","zUnit":"PX"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1552131539407}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function Footer({ as: _Component = _Builtin.Block }) {
  _interactions.useInteractions(_interactionsData, _styles);

  return (
    <_Component className={_utils.cx(_styles, "a-section")} tag="div">
      <_Builtin.NotSupported _atom="DynamoWrapper" />
      <_Builtin.FormWrapper
        className={_utils.cx(_styles, "a-footernewsletterformwrapper")}
      >
        <_Builtin.FormForm
          className={_utils.cx(_styles, "a-footernewsletter")}
          name="wf-form-Newsletter-Form"
          data-name="Newsletter Form"
          method="get"
          id="wf-form-Newsletter-Form"
        >
          <_Builtin.FormTextInput
            className={_utils.cx(_styles, "a-footernewsletterfield")}
            autoFocus={false}
            maxLength={256}
            name="Newsletter-Email"
            data-name="Newsletter Email"
            placeholder="Enter your email..."
            type="email"
            disabled={false}
            required={true}
            id="Newsletter-Email"
          />
          <_Builtin.FormButton
            className={_utils.cx(_styles, "a-footernewsletterbutton")}
            type="submit"
            value="Sign up to our newsletter"
            data-wait="Please wait..."
          />
        </_Builtin.FormForm>
        <_Builtin.FormSuccessMessage
          className={_utils.cx(_styles, "a-newslettersuccess")}
        >
          <_Builtin.Heading tag="h4">
            {"Thanks for subscribing "}
            {"👍"}
          </_Builtin.Heading>
          <_Builtin.Block tag="div">
            {
              "Nothing to do now but relax and await our awesome newsletter to arrive."
            }
          </_Builtin.Block>
        </_Builtin.FormSuccessMessage>
        <_Builtin.FormErrorMessage>
          <_Builtin.Block tag="div">
            {"Oops! Something went wrong while submitting the form."}
          </_Builtin.Block>
        </_Builtin.FormErrorMessage>
      </_Builtin.FormWrapper>
      <_Builtin.Block className={_utils.cx(_styles, "a-footer")} tag="div">
        <_Builtin.Block
          className={_utils.cx(_styles, "a-footercolumn")}
          tag="div"
        >
          <_Builtin.Heading
            className={_utils.cx(_styles, "a-footercolumntitle")}
            tag="h5"
          >
            {"About Us"}
          </_Builtin.Heading>
          <_Builtin.Link
            className={_utils.cx(_styles, "a-footerlink")}
            button={false}
            options={{
              href: "#",
            }}
          >
            {"Meet the Team"}
          </_Builtin.Link>
          <_Builtin.Link
            className={_utils.cx(_styles, "a-footerlink")}
            button={false}
            options={{
              href: "#",
            }}
          >
            {"Product Updates"}
          </_Builtin.Link>
          <_Builtin.Link
            className={_utils.cx(_styles, "a-footerlink")}
            button={false}
            options={{
              href: "http://docs.sunlight.is/#overview",
            }}
          >
            {"APIDocumentation"}
          </_Builtin.Link>
        </_Builtin.Block>
        <_Builtin.Block
          className={_utils.cx(_styles, "a-footercolumn")}
          tag="div"
        >
          <_Builtin.Heading
            className={_utils.cx(_styles, "a-footercolumntitle")}
            tag="h5"
          >
            {"Help &Support"}
          </_Builtin.Heading>
          <_Builtin.Link
            className={_utils.cx(_styles, "a-footerlink")}
            button={false}
            options={{
              href: "mailto:info@sunlight.is?subject=Hello%20Sunlight",
            }}
          >
            {"Contact Us"}
          </_Builtin.Link>
          <_Builtin.Link
            className={_utils.cx(_styles, "a-footerlink")}
            button={false}
            options={{
              href: "https://support.sunlight.is/en/",
              target: "_blank",
            }}
          >
            {"Helpdesk"}
          </_Builtin.Link>
          <_Builtin.Link
            className={_utils.cx(_styles, "a-footerlink")}
            button={false}
            options={{
              href: "http://grow.sunlight.is",
            }}
          >
            {"Recover Password"}
          </_Builtin.Link>
        </_Builtin.Block>
        <_Builtin.Block
          className={_utils.cx(_styles, "a-footercolumn")}
          tag="div"
        >
          <_Builtin.Heading
            className={_utils.cx(_styles, "a-footercolumntitle")}
            tag="h5"
          >
            {"Follow Us"}
          </_Builtin.Heading>
          <_Builtin.Row className={_utils.cx(_styles, "columns")} tag="div">
            <_Builtin.Column
              className={_utils.cx(_styles, "column-social")}
              tag="div"
            >
              <_Builtin.Link
                className={_utils.cx(_styles, "social-link", "noleftmargin")}
                button={false}
                options={{
                  href: "https://www.linkedin.com/company/sunlight.is/",
                  target: "_blank",
                }}
              >
                <_Builtin.Image
                  width="auto"
                  height="auto"
                  loading="auto"
                  src="https://uploads-ssl.webflow.com/648a17b3d09858d6b341d4d6/648a17b3d09858d6b341d710_Linkedin%20icon.svg"
                />
              </_Builtin.Link>
              <_Builtin.Link
                className={_utils.cx(_styles, "social-link", "noleftmargin")}
                button={false}
                options={{
                  href: "https://www.instagram.com/sunlight.is/",
                  target: "_blank",
                }}
              >
                <_Builtin.Image
                  width="auto"
                  height="auto"
                  loading="auto"
                  src="https://uploads-ssl.webflow.com/648a17b3d09858d6b341d4d6/648a17b3d09858d6b341d711_Instagram%20icon.svg"
                />
              </_Builtin.Link>
            </_Builtin.Column>
            <_Builtin.Column
              className={_utils.cx(_styles, "column-social")}
              tag="div"
            >
              <_Builtin.Link
                className={_utils.cx(_styles, "social-link")}
                button={false}
                options={{
                  href: "https://twitter.com/withsunlight",
                  target: "_blank",
                }}
              >
                <_Builtin.Image
                  width="auto"
                  height="auto"
                  loading="auto"
                  src="https://uploads-ssl.webflow.com/648a17b3d09858d6b341d4d6/648a17b3d09858d6b341d719_Twitter%20icon.svg"
                />
              </_Builtin.Link>
              <_Builtin.Link
                className={_utils.cx(_styles, "social-link")}
                button={false}
                options={{
                  href: "https://www.youtube.com/channel/UC9WrcJNm9mWI8MfcDsibm0Q",
                  target: "_blank",
                }}
              >
                <_Builtin.Image
                  width="auto"
                  height="auto"
                  loading="auto"
                  src="https://uploads-ssl.webflow.com/648a17b3d09858d6b341d4d6/648a17b3d09858d6b341d71c_youtube%20(2)%201.svg"
                />
              </_Builtin.Link>
            </_Builtin.Column>
            <_Builtin.Column
              className={_utils.cx(_styles, "column-social")}
              tag="div"
            >
              <_Builtin.Link
                className={_utils.cx(_styles, "social-link")}
                button={false}
                options={{
                  href: "https://www.facebook.com/WithSunlight/",
                  target: "_blank",
                }}
              >
                <_Builtin.Image
                  width="auto"
                  height="auto"
                  loading="auto"
                  src="https://uploads-ssl.webflow.com/648a17b3d09858d6b341d4d6/648a17b3d09858d6b341d71a_Facebook%20icon.svg"
                />
              </_Builtin.Link>
              <_Builtin.Link
                className={_utils.cx(_styles, "social-link")}
                button={false}
                options={{
                  href: "https://medium.com/@WithSunlight",
                  target: "_blank",
                }}
              >
                <_Builtin.Image
                  width="auto"
                  height="auto"
                  loading="auto"
                  src="https://uploads-ssl.webflow.com/648a17b3d09858d6b341d4d6/648a17b3d09858d6b341d71d_medium.svg"
                />
              </_Builtin.Link>
            </_Builtin.Column>
          </_Builtin.Row>
        </_Builtin.Block>
        <_Builtin.Block
          className={_utils.cx(_styles, "a-footercolumn")}
          tag="div"
        >
          <_Builtin.Heading
            className={_utils.cx(_styles, "a-footercolumntitle")}
            tag="h5"
          >
            {"Privacy &Security"}
          </_Builtin.Heading>
          <_Builtin.Link
            className={_utils.cx(_styles, "a-footerlink")}
            button={false}
            options={{
              href: "#",
            }}
          >
            {"Terms &Conditions"}
          </_Builtin.Link>
          <_Builtin.Link
            className={_utils.cx(_styles, "a-footerlink")}
            button={false}
            options={{
              href: "#",
            }}
          >
            {"Security Policy"}
          </_Builtin.Link>
          <_Builtin.Link
            className={_utils.cx(_styles, "a-footerlink")}
            button={false}
            options={{
              href: "#",
            }}
          >
            {"Privacy Policy"}
          </_Builtin.Link>
          <_Builtin.Link
            className={_utils.cx(_styles, "a-footerlink")}
            button={false}
            options={{
              href: "#",
            }}
          >
            {"More"}
          </_Builtin.Link>
        </_Builtin.Block>
      </_Builtin.Block>
      <_Builtin.Block className={_utils.cx(_styles, "a-footerend")} tag="div">
        <_Builtin.Paragraph>
          {
            "Sunlight Technologies Limited is a limited company registered in England and Wales (No. 10275463)"
          }
        </_Builtin.Paragraph>
      </_Builtin.Block>
    </_Component>
  );
}

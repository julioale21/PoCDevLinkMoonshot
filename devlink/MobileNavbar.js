import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./MobileNavbar.module.css";

export function MobileNavbar({ as: _Component = _Builtin.NavbarWrapper }) {
  return (
    <_Component
      className={_utils.cx(_styles, "mobilenavbar")}
      tag="div"
      data-collapse="medium"
      data-animation="default"
      data-duration="400"
      config={{
        animation: "default",
        easing: "ease",
        easing2: "ease",
        duration: 400,
        docHeight: false,
        collapse: "medium",
        noScroll: false,
      }}
    >
      <_Builtin.NavbarContainer
        className={_utils.cx(_styles, "container")}
        tag="div"
      >
        <_Builtin.NavbarBrand
          className={_utils.cx(_styles, "brand")}
          options={{
            href: "#",
          }}
        >
          <_Builtin.Image
            width="auto"
            height="auto"
            loading="auto"
            src="https://uploads-ssl.webflow.com/648a17b3d09858d6b341d4d6/648a17b3d09858d6b341d540_Sunlight%20Logo.svg"
          />
        </_Builtin.NavbarBrand>
        <_Builtin.Link
          className={_utils.cx(_styles, "a-navlink", "mobile")}
          button={false}
          options={{
            href: "http://grow.sunlight.is",
          }}
        >
          {"Log in"}
        </_Builtin.Link>
        <_Builtin.NavbarMenu
          className={_utils.cx(_styles, "v-mobilenavmenu")}
          tag="nav"
          role="navigation"
        >
          <_Builtin.DropdownWrapper
            className={_utils.cx(_styles, "v-dropdownmobile")}
            tag="div"
            data-delay="0"
            data-hover={false}
          >
            <_Builtin.DropdownToggle
              className={_utils.cx(_styles, "v-mobilelink")}
              tag="div"
            >
              <_Builtin.Icon
                widget={{
                  type: "icon",
                  icon: "dropdown-toggle",
                }}
              />
              <_Builtin.Block tag="div">{"Product"}</_Builtin.Block>
            </_Builtin.DropdownToggle>
            <_Builtin.DropdownList
              className={_utils.cx(_styles, "dropdown-list")}
              tag="nav"
            >
              <_Builtin.DropdownLink
                className={_utils.cx(_styles, "v-mobilelink", "dropdown")}
                options={{
                  href: "#",
                }}
              >
                {"How it works"}
              </_Builtin.DropdownLink>
              <_Builtin.DropdownLink
                className={_utils.cx(_styles, "v-mobilelink", "dropdown")}
                options={{
                  href: "#",
                }}
              >
                {"Security & Privacy"}
              </_Builtin.DropdownLink>
              <_Builtin.DropdownLink
                className={_utils.cx(_styles, "v-mobilelink", "dropdown")}
                options={{
                  href: "#",
                }}
              >
                {"Updates"}
              </_Builtin.DropdownLink>
              <_Builtin.DropdownLink
                className={_utils.cx(_styles, "v-mobilelink", "dropdown")}
                options={{
                  href: "#",
                }}
              >
                {"Providers"}
              </_Builtin.DropdownLink>
            </_Builtin.DropdownList>
          </_Builtin.DropdownWrapper>
          <_Builtin.NavbarLink
            className={_utils.cx(_styles, "v-mobilelink")}
            options={{
              href: "#",
            }}
          >
            {"Customers"}
          </_Builtin.NavbarLink>
          <_Builtin.DropdownWrapper
            className={_utils.cx(_styles, "v-dropdownmobile")}
            tag="div"
            data-delay="0"
            data-hover={false}
          >
            <_Builtin.DropdownToggle
              className={_utils.cx(_styles, "v-mobilelink")}
              tag="div"
            >
              <_Builtin.Icon
                widget={{
                  type: "icon",
                  icon: "dropdown-toggle",
                }}
              />
              <_Builtin.Block tag="div">{"Use Cases"}</_Builtin.Block>
            </_Builtin.DropdownToggle>
            <_Builtin.DropdownList
              className={_utils.cx(_styles, "dropdown-list")}
              tag="nav"
            >
              <_Builtin.DropdownLink
                className={_utils.cx(_styles, "v-mobilelink", "dropdown")}
                options={{
                  href: "#",
                }}
              >
                {"For Managers"}
              </_Builtin.DropdownLink>
              <_Builtin.DropdownLink
                className={_utils.cx(_styles, "v-mobilelink", "dropdown")}
                options={{
                  href: "#",
                }}
              >
                {"For Startups"}
              </_Builtin.DropdownLink>
              <_Builtin.DropdownLink
                className={_utils.cx(_styles, "v-mobilelink", "dropdown")}
                options={{
                  href: "#",
                }}
              >
                {"For Employee Resource Groups"}
              </_Builtin.DropdownLink>
            </_Builtin.DropdownList>
          </_Builtin.DropdownWrapper>
          <_Builtin.NavbarLink
            className={_utils.cx(_styles, "v-mobilelink")}
            options={{
              href: "#",
            }}
          >
            {"Pricing"}
          </_Builtin.NavbarLink>
          <_Builtin.NavbarLink
            className={_utils.cx(_styles, "v-mobilelink")}
            options={{
              href: "#",
            }}
          >
            {"Blog"}
          </_Builtin.NavbarLink>
        </_Builtin.NavbarMenu>
        <_Builtin.NavbarButton
          className={_utils.cx(_styles, "v-menubuttonmobile")}
          tag="div"
        >
          <_Builtin.Icon
            widget={{
              type: "icon",
              icon: "nav-menu",
            }}
          />
        </_Builtin.NavbarButton>
      </_Builtin.NavbarContainer>
    </_Component>
  );
}

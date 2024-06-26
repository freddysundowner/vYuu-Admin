(this.webpackJsonptokshop = this.webpackJsonptokshop || []).push([
  [9],
  {
    103: function (e, t, a) {
      "use strict";
      var s = a(0),
        r = a(53),
        l = a(17),
        c = a(56),
        n = a(18);
      t.a = (e) => {
        const [t, a] = Object(s.useState)([]),
          [i, o] = Object(s.useState)(""),
          [d, j] = Object(s.useState)(null),
          [b, m] = Object(s.useState)(!1),
          [u, p] = Object(s.useState)([]),
          [h, x] = Object(s.useState)([]),
          {
            isDrawerOpen: g,
            closeDrawer: O,
            setIsUpdate: f,
            files: y,
            setFiles: v,
          } = Object(s.useContext)(l.a),
          {
            register: N,
            handleSubmit: S,
            watch: w,
            setValue: C,
            clearErrors: k,
            formState: { errors: A },
          } = Object(r.a)(),
          T = (t) => {
            const a = {
              sku: t.sku,
              name: t.title,
              description: t.description,
              category: Array.from(
                new Set(u.flatMap((e) => e.name.split(", ")))
              ),
              quantity: t.quantity,
              price: t.salePrice ? t.salePrice : t.originalPrice,
              discountedPrice:
                void 0 == t.discountedPrice ? 0 : t.discountedPrice,
            };
            e
              ? (c.a
                  .updateProduct(e, a)
                  .then((e) => {
                    f(!0), Object(n.c)("product updated");
                  })
                  .catch((e) => Object(n.b)(e.message)),
                O())
              : (c.a
                  .addProduct(a)
                  .then((e) => {
                    f(!0), Object(n.c)("product added");
                  })
                  .catch((e) => Object(n.b)(e.message)),
                O());
          };
        return (
          Object(s.useEffect)(() => {
            if (!g)
              return (
                C("sku"),
                C("title"),
                C("slug"),
                C("description"),
                C("parent"),
                C("children"),
                C("type"),
                C("unit"),
                C("quantity"),
                C("originalPrice"),
                C("salePrice"),
                a(""),
                o(""),
                k("sku"),
                k("title"),
                k("slug"),
                k("description"),
                k("parent"),
                k("children"),
                k("type"),
                k("unit"),
                k("quantity"),
                k("originalPrice"),
                k("salePrice"),
                k("tax1"),
                void k("tax2")
              );
            e &&
              c.a
                .getProductById(e)
                .then((e) => {
                  if ((console.log(e), e)) {
                    var t = [];
                    e.interest.forEach((e, a) => {
                      t.push({ id: e._id, name: e.name });
                    }),
                      C("sku", e._id.substring(18, 26)),
                      C("title", e.name),
                      C("id", e._id),
                      C("description", e.description),
                      C("parent", e.category),
                      C("variations", e.variations),
                      C("quantity", e.quantity),
                      C("originalPrice", e.discountedPrice),
                      C("salePrice", e.price),
                      p(t),
                      j(e),
                      v(e.images),
                      a(e.images),
                      console.log(e.variations),
                      x(e.variations);
                  }
                })
                .catch((e) => {
                  Object(n.b)("There is a server error!");
                });
          }, [e, C, g]),
          Object(s.useEffect)(() => {
            o(w("children"));
          }, [w, i]),
          {
            register: N,
            watch: w,
            handleSubmit: S,
            updateProductImages: (e, t) => {
              c.a
                .updateProduct(t, { images: e })
                .then((e) => {
                  f(!0), Object(n.c)(e.message);
                })
                .catch((e) => Object(n.b)(e.message));
            },
            onSubmit: (e) => {
              e.discountedPrice < e.salePrice
                ? Object(n.b)(
                    "SalePrice must be less then or equal of product price!"
                  )
                : T(e);
            },
            errors: A,
            imageUrl: t,
            setImageUrl: a,
            tag: u,
            setTag: p,
            variations: h,
            setVariations: x,
          }
        );
      };
    },
    121: function (e, t, a) {
      "use strict";
      a(0);
      var s = a(16),
        r = a(1);
      t.a = (e) => {
        let {
          register: t,
          required: a,
          maxValue: l,
          minValue: c,
          defaultValue: n,
          name: i,
          label: o,
          type: d,
          placeholder: j,
        } = e;
        const b = {
          valueAsNumber: !0,
          required: !a && `${o} is required!`,
          min: { value: c, message: `Minimum value ${c}!` },
        };
        return Object(r.jsx)(r.Fragment, {
          children: Object(r.jsx)(s.Input, {
            ...t(`${i}`, b),
            defaultValue: n,
            type: d,
            placeholder: j,
            name: i,
            className:
              "border h-12 text-sm focus:outline-none block w-full bg-gray-100 dark:bg-white border-transparent focus:bg-white",
          }),
        });
      };
    },
    122: function (e, t, a) {
      "use strict";
      var s = a(0),
        r = (a(70), a(177)),
        l = a(41),
        c = a(17),
        n = a(60),
        i = a(103),
        o = a(1);
      t.a = (e) => {
        let { id: t } = e;
        const {
            files: a,
            setFiles: d,
            closeDrawer: j,
          } = Object(s.useContext)(c.a),
          { updateProductImages: b } = Object(i.a)(t),
          { getRootProps: m, getInputProps: u } = Object(r.a)({
            accept: "image/*",
            multiple: !1,
            maxSize: 5e5,
            onDrop: (e) => {},
          });
        var p;
        return (
          a.length > 0 &&
            (p = a.map(function (e, s) {
              return "string" === typeof e || e instanceof String
                ? Object(o.jsx)(
                    "div",
                    {
                      children: Object(o.jsxs)("div", {
                        children: [
                          a.length > 1
                            ? Object(o.jsx)("div", {
                                onClick: () => {
                                  a.splice(s, 1), b(a, t);
                                },
                                className:
                                  "p-2 cursor-pointer text-gray-400 hover:text-red-600",
                                children: Object(o.jsx)(n.a, {
                                  id: "delete",
                                  Icon: l.k,
                                  title: "Delete",
                                  bgColor: "#EF4444",
                                }),
                              })
                            : "",
                          Object(o.jsx)("img", {
                            className:
                              "inline-flex border-2 border-gray-100 w-24 max-h-24",
                            src: e,
                          }),
                        ],
                      }),
                    },
                    s
                  )
                : void 0 != e[0]
                ? Object(o.jsx)(
                    "div",
                    {
                      children: Object(o.jsxs)("div", {
                        children: [
                          Object(o.jsx)("div", {
                            onClick: () => {
                              console.log(s),
                                a.splice(s, 1),
                                d((e) => [...e, a]);
                            },
                            className:
                              "p-2 cursor-pointer text-gray-400 hover:text-red-600",
                            children: Object(o.jsx)(n.a, {
                              id: "delete",
                              Icon: l.k,
                              title: "Delete",
                              bgColor: "#EF4444",
                            }),
                          }),
                          Object(o.jsx)("img", {
                            className:
                              "inline-flex border-2 border-gray-100 w-24 max-h-24",
                            src: e[0].preview,
                          }),
                        ],
                      }),
                    },
                    s
                  )
                : void 0;
            })),
          Object(s.useEffect)(
            () => () => {
              a.forEach((e) => URL.revokeObjectURL(e.preview));
            },
            [a]
          ),
          Object(o.jsxs)("div", {
            className: "w-full text-center",
            children: [
              Object(o.jsxs)("div", {
                className:
                  "px-6 pt-5 pb-6 border-2 border-gray-300 dark:border-gray-600 border-dashed rounded-md cursor-pointer",
                ...m(),
                children: [
                  Object(o.jsx)("input", { ...u() }),
                  Object(o.jsx)("span", {
                    className: "mx-auto flex justify-center",
                    children: Object(o.jsx)(l.m, {
                      className: "text-3xl text-green-500",
                    }),
                  }),
                  Object(o.jsx)("p", {
                    className: "text-sm mt-2",
                    children: "Drag your image here",
                  }),
                  Object(o.jsx)("em", {
                    className: "text-xs text-gray-400",
                    children: "(Only *.jpeg and *.png images will be accepted)",
                  }),
                ],
              }),
              Object(o.jsx)("aside", {
                className: "flex flex-row flex-wrap mt-4",
                children: p,
              }),
            ],
          })
        );
      };
    },
    123: function (e, t, a) {
      "use strict";
      var s = a(0),
        r = a(53),
        l = a(11),
        c = a(18),
        n = a(46);
      t.a = (e) => {
        const { state: t } = Object(s.useContext)(l.a),
          { adminInfo: a } = t,
          [i, o] = Object(s.useState)(""),
          {
            register: d,
            handleSubmit: j,
            setValue: b,
            clearErrors: m,
            formState: { errors: u },
          } = Object(r.a)();
        return (
          Object(s.useEffect)(() => {
            e &&
              n.a
                .getShopByUserId(e)
                .then((e) => {
                  console.log("shop", e),
                    o(e._id),
                    e &&
                      (b("wcSecretKey", e.wcConsumerKey),
                      b("wcConsumerKey", e.wcSecretKey),
                      b("wcUrl", e.wcUrl),
                      b("shopifyUrl", e.shopifyUrl),
                      b("shopifyAccessToken", e.shopifyAccessToken));
                })
                .catch((e) => {});
          }, [e, b, a.email, m]),
          {
            register: d,
            handleSubmit: j,
            onSubmit: (e) => {
              n.a
                .updateShop(i, e)
                .then((e) => {
                  Object(c.c)("Shop updated Successfully!");
                })
                .catch((e) => Object(c.b)(e.message));
            },
            errors: u,
          }
        );
      };
    },
    210: function (e, t, a) {
      "use strict";
      a.r(t);
      var s = a(0),
        r = a(2),
        l = a(1);
      var c = (e) => {
          let { children: t } = e;
          return Object(l.jsx)("main", {
            className: "h-full overflow-y-auto",
            children: Object(l.jsx)("div", {
              className: "container grid px-6 mx-auto",
              children: t,
            }),
          });
        },
        n = a(16),
        i = a(43),
        o = a(44),
        d = a(47),
        j = a(11),
        b = a(53),
        m = a(8),
        u = a.n(m),
        p = (a(48), a(49)),
        h = a(17),
        x = a(18);
      var g = (e) => {
        const { state: t } = Object(s.useContext)(j.a),
          { adminInfo: a } = t,
          {
            isDrawerOpen: l,
            closeDrawer: c,
            setIsUpdate: n,
          } = (Object(r.h)(), Object(s.useContext)(h.a)),
          {
            register: i,
            handleSubmit: o,
            setValue: d,
            clearErrors: m,
            formState: { errors: u },
          } = Object(b.a)();
        return (
          Object(s.useEffect)(() => {
            e &&
              p.a
                .getAppSettings(e)
                .then((e) => {
                  if (e) {
                    var t = e[0];
                    d("recordedVideoBaseUrl", t.recordedVideoBaseUrl),
                      d("apiBaseUrl", t.apiBaseUrl),
                      d("agoraAppRecordKey", t.agoraAppRecordKey),
                      d("stripepublickey", t.stripepublickey),
                      d("stripeSecretKey", t.stripeSecretKey),
                      d("fwPublicKey", t.fwPublicKey),
                      d("youTubeStreamKey", t.youTubeStreamKey),
                      d("OneSignalApiKey", t.OneSignalApiKey),
                      d("oneSignalAppID", t.oneSignalAppID),
                      d("currency", t.currency),
                      d("commission", t.commission),
                      d("fbStreamKey", t.fbStreamKey),
                      d("agoraAppID", t.agoraAppID),
                      d("AGORA_CERT", t.AGORA_CERT),
                      d("AGORA_CUSTOMER_KEY", t.AGORA_CUSTOMER_KEY),
                      d("AGORA_CUSTOMER_SECRET", t.AGORA_CUSTOMER_SECRET),
                      d("FLUTTERWAVE_SECRET_KEY", t.FLUTTERWAVE_SECRET_KEY),
                      d("AWSVENDOR", t.AWSVENDOR),
                      d("AWSREGION", t.AWSREGION),
                      d("AWSBUCKET", t.AWSBUCKET),
                      d("AWSACCESSKEY", t.AWSACCESSKEY),
                      d("AWSSECRETKEY", t.AWSSECRETKEY),
                      d("iosVersion", t.iosVersion),
                      d("androidVersion", t.androidVersion);
                  }
                })
                .catch((e) => {
                  Object(x.b)("There is a server error!");
                });
          }, [e, d, l, a.email, m]),
          {
            register: i,
            handleSubmit: o,
            onSubmit: (e) => {
              console.log(e),
                p.a
                  .updateAppSettings(e)
                  .then((e) => {
                    n(!0), Object(x.c)("Admin Updated Successfully!");
                  })
                  .catch((e) => Object(x.b)(e.message));
            },
            errors: u,
          }
        );
      };
      var O = () => {
          const {
              state: { adminInfo: e, token: t },
            } = Object(s.useContext)(j.a),
            { register: a, handleSubmit: r, onSubmit: c, errors: b } = g(e._id);
          return Object(l.jsx)(l.Fragment, {
            children:
              "true" ===
              Object({
                NODE_ENV: "production",
                PUBLIC_URL: "",
                WDS_SOCKET_HOST: void 0,
                WDS_SOCKET_PATH: void 0,
                WDS_SOCKET_PORT: void 0,
                FAST_REFRESH: !0,
                REACT_APP_API_BASE_URL: "https://api.vyuu.ai",
              }).REACT_APP_DEV_STATUS
                ? Object(l.jsx)(l.Fragment, {
                    children: Object(l.jsx)("h1", {
                      className:
                        "text-lg font-bold text-gray-700 dark:text-gray-300 w-full max-h-full p-20",
                      children:
                        "This is demo you are not allowed to see the settings",
                    }),
                  })
                : Object(l.jsx)("div", {
                    className:
                      "container p-6 mx-auto bg-white  dark:bg-gray-800 dark:text-gray-200 rounded-lg",
                    children: Object(l.jsxs)("form", {
                      onSubmit: r(c),
                      children: [
                        Object(l.jsxs)("div", {
                          className:
                            "p-6 flex-grow scrollbar-hide w-full max-h-full",
                          children: [
                            Object(l.jsx)("h1", {
                              className:
                                "text-lg font-bold text-gray-700 dark:text-gray-300",
                              children: "Video/Audio Stream settings",
                            }),
                            Object(l.jsxs)("h2", {
                              className:
                                "text-sm text-gray-500 dark:text-gray-300",
                              children: [
                                "Vyuu uses Agora to stream video and Audio, for more information refer to agora documentation",
                                " ",
                                Object(l.jsx)("a", {
                                  href: "https://docs.agora.io/en/",
                                  target: "_blank",
                                  children: "Here",
                                }),
                              ],
                            }),
                            Object(l.jsx)("div", { className: "mt-6" }),
                            Object(l.jsxs)("div", {
                              className:
                                "grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6",
                              children: [
                                Object(l.jsx)(o.a, { label: "Agora App Id" }),
                                Object(l.jsxs)("div", {
                                  className: "col-span-8 sm:col-span-4",
                                  children: [
                                    Object(l.jsx)(d.a, {
                                      register: a,
                                      defaultValue: "",
                                      label: "agora app id",
                                      required: "false",
                                      name: "agoraAppID",
                                      type: "agoraAppID",
                                      placeholder: "agora App ID",
                                    }),
                                    Object(l.jsx)(i.a, {
                                      errorName: b.agoraAppID,
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          ],
                        }),
                        Object(l.jsx)("div", {
                          className:
                            "p-6 flex-grow scrollbar-hide w-full max-h-full",
                          children: Object(l.jsxs)("div", {
                            className:
                              "grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6",
                            children: [
                              Object(l.jsx)(o.a, {
                                label: "Agora Certificate",
                              }),
                              Object(l.jsxs)("div", {
                                className: "col-span-8 sm:col-span-4",
                                children: [
                                  Object(l.jsx)(d.a, {
                                    register: a,
                                    defaultValue: "",
                                    label: "agora Certificate",
                                    required: "false",
                                    name: "AGORA_CERT",
                                    type: "AGORA_CERT",
                                    placeholder: "agora certificate key",
                                  }),
                                  Object(l.jsx)(i.a, {
                                    errorName: b.AGORA_CERT,
                                  }),
                                ],
                              }),
                            ],
                          }),
                        }),
                        Object(l.jsxs)("div", {
                          className:
                            "p-6 flex-grow scrollbar-hide w-full max-h-full",
                          children: [
                            Object(l.jsx)("h1", {
                              className:
                                "text-lg font-bold text-gray-700 dark:text-gray-300",
                              children: "Payment Settings",
                            }),
                            Object(l.jsx)("div", { className: "mt-6" }),
                            Object(l.jsxs)("div", {
                              className:
                                "grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6",
                              children: [
                                Object(l.jsx)(o.a, {
                                  label: "Stripe Public Key",
                                }),
                                Object(l.jsxs)("div", {
                                  className: "col-span-8 sm:col-span-4",
                                  children: [
                                    Object(l.jsx)(d.a, {
                                      register: a,
                                      defaultValue: "",
                                      label: "stripepublickey",
                                      name: "stripepublickey",
                                      required: "false",
                                      type: "stripepublickey",
                                      placeholder: "Stripe Public Key",
                                    }),
                                    Object(l.jsx)(i.a, {
                                      errorName: b.stripepublickey,
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          ],
                        }),
                        Object(l.jsx)("div", {
                          className:
                            "p-6 flex-grow scrollbar-hide w-full max-h-full",
                          children: Object(l.jsxs)("div", {
                            className:
                              "grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6",
                            children: [
                              Object(l.jsx)(o.a, {
                                label: "Stripe Secret Key",
                              }),
                              Object(l.jsxs)("div", {
                                className: "col-span-8 sm:col-span-4",
                                children: [
                                  Object(l.jsx)(d.a, {
                                    register: a,
                                    defaultValue: "",
                                    label: "stripeSecretKey ",
                                    name: "stripeSecretKey",
                                    required: "false",
                                    type: "stripeSecretKey",
                                    placeholder: "Stripe Secret Key",
                                  }),
                                  Object(l.jsx)(i.a, {
                                    errorName: b.stripeSecretKey,
                                  }),
                                ],
                              }),
                            ],
                          }),
                        }),
                        Object(l.jsx)("div", {
                          className:
                            "p-6 flex-grow scrollbar-hide w-full max-h-full",
                          children: Object(l.jsxs)("div", {
                            className:
                              "grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6",
                            children: [
                              Object(l.jsx)(o.a, {
                                label: "Flutter Wave Public Key",
                              }),
                              Object(l.jsxs)("div", {
                                className: "col-span-8 sm:col-span-4",
                                children: [
                                  Object(l.jsx)(d.a, {
                                    register: a,
                                    defaultValue: "",
                                    label: "fwPublicKey ",
                                    required: "false",
                                    name: "fwPublicKey",
                                    type: "fwPublicKey",
                                    placeholder: "Flutter Wave Public Key",
                                  }),
                                  Object(l.jsx)(i.a, {
                                    errorName: b.fwPublicKey,
                                  }),
                                ],
                              }),
                            ],
                          }),
                        }),
                        Object(l.jsx)("div", {
                          className:
                            "p-6 flex-grow scrollbar-hide w-full max-h-full",
                          children: Object(l.jsxs)("div", {
                            className:
                              "grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6",
                            children: [
                              Object(l.jsx)(o.a, {
                                label: "Flutterwave secret key",
                              }),
                              Object(l.jsxs)("div", {
                                className: "col-span-8 sm:col-span-4",
                                children: [
                                  Object(l.jsx)(d.a, {
                                    register: a,
                                    defaultValue: "",
                                    label: "Flutterwave secret key",
                                    required: "false",
                                    name: "FLUTTERWAVE_SECRET_KEY",
                                    type: "FLUTTERWAVE_SECRET_KEY",
                                    placeholder: "Flutterwave secret key",
                                  }),
                                  Object(l.jsx)(i.a, {
                                    errorName: b.FLUTTERWAVE_SECRET_KEY,
                                  }),
                                ],
                              }),
                            ],
                          }),
                        }),
                        Object(l.jsxs)("div", {
                          className:
                            "p-6 flex-grow scrollbar-hide w-full max-h-full",
                          children: [
                            Object(l.jsx)("h1", {
                              className:
                                "text-lg font-bold text-gray-700 dark:text-gray-300",
                              children: "Others",
                            }),
                            Object(l.jsx)("div", { className: "mt-6" }),
                            Object(l.jsxs)("div", {
                              className:
                                "grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6",
                              children: [
                                Object(l.jsx)(o.a, {
                                  label: "Youtube Stream Key",
                                }),
                                Object(l.jsxs)("div", {
                                  className: "col-span-8 sm:col-span-4",
                                  children: [
                                    Object(l.jsx)(d.a, {
                                      register: a,
                                      defaultValue: "",
                                      label: "youTubeStreamKey ",
                                      required: "false",
                                      name: "youTubeStreamKey",
                                      type: "youTubeStreamKey",
                                      placeholder: "YouTube Stream Key",
                                    }),
                                    Object(l.jsx)(i.a, {
                                      errorName: b.youTubeStreamKey,
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          ],
                        }),
                        Object(l.jsx)("div", {
                          className:
                            "p-6 flex-grow scrollbar-hide w-full max-h-full",
                          children: Object(l.jsxs)("div", {
                            className:
                              "grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6",
                            children: [
                              Object(l.jsx)(o.a, {
                                label: "Facebook Stream Key",
                              }),
                              Object(l.jsxs)("div", {
                                className: "col-span-8 sm:col-span-4",
                                children: [
                                  Object(l.jsx)(d.a, {
                                    register: a,
                                    defaultValue: "",
                                    label: "fbStreamKey ",
                                    required: "false",
                                    name: "fbStreamKey",
                                    type: "fbStreamKey",
                                    placeholder: "Facebook Stream Key",
                                  }),
                                  Object(l.jsx)(i.a, {
                                    errorName: b.fbStreamKey,
                                  }),
                                ],
                              }),
                            ],
                          }),
                        }),
                        Object(l.jsx)("div", {
                          className:
                            "p-6 flex-grow scrollbar-hide w-full max-h-full",
                          children: Object(l.jsxs)("div", {
                            className:
                              "grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6",
                            children: [
                              Object(l.jsx)(o.a, {
                                label: "One Signal App ID",
                              }),
                              Object(l.jsxs)("div", {
                                className: "col-span-8 sm:col-span-4",
                                children: [
                                  Object(l.jsx)(d.a, {
                                    register: a,
                                    defaultValue: "",
                                    label: "oneSignalAppID ",
                                    required: "false",
                                    name: "oneSignalAppID",
                                    type: "oneSignalAppID",
                                    placeholder: "One Signal App ID",
                                  }),
                                  Object(l.jsx)(i.a, {
                                    errorName: b.oneSignalAppID,
                                  }),
                                ],
                              }),
                            ],
                          }),
                        }),
                        Object(l.jsx)("div", {
                          className:
                            "p-6 flex-grow scrollbar-hide w-full max-h-full",
                          children: Object(l.jsxs)("div", {
                            className:
                              "grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6",
                            children: [
                              Object(l.jsx)(o.a, {
                                label: "One Signal Api Key",
                              }),
                              Object(l.jsxs)("div", {
                                className: "col-span-8 sm:col-span-4",
                                children: [
                                  Object(l.jsx)(d.a, {
                                    register: a,
                                    defaultValue: "",
                                    label: "OneSignalApiKey ",
                                    required: "false",
                                    name: "OneSignalApiKey",
                                    type: "OneSignalApiKey",
                                    placeholder: "One Signal Api Key",
                                  }),
                                  Object(l.jsx)(i.a, {
                                    errorName: b.OneSignalApiKey,
                                  }),
                                ],
                              }),
                            ],
                          }),
                        }),
                        Object(l.jsx)("div", {
                          className:
                            "p-6 flex-grow scrollbar-hide w-full max-h-full",
                          children: Object(l.jsxs)("div", {
                            className:
                              "grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6",
                            children: [
                              Object(l.jsx)(o.a, { label: "Default Currency" }),
                              Object(l.jsxs)("div", {
                                className: "col-span-8 sm:col-span-4",
                                children: [
                                  Object(l.jsx)(d.a, {
                                    register: a,
                                    defaultValue: "",
                                    label: "currency ",
                                    required: "false",
                                    name: "currency",
                                    type: "currency",
                                    placeholder: "currency",
                                  }),
                                  Object(l.jsx)(i.a, { errorName: b.currency }),
                                ],
                              }),
                            ],
                          }),
                        }),
                        Object(l.jsx)("div", {
                          className:
                            "p-6 flex-grow scrollbar-hide w-full max-h-full",
                          children: Object(l.jsxs)("div", {
                            className:
                              "grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6",
                            children: [
                              Object(l.jsx)(o.a, {
                                label: "Admin commission (%)",
                              }),
                              Object(l.jsxs)("div", {
                                className: "col-span-8 sm:col-span-4",
                                children: [
                                  Object(l.jsx)(d.a, {
                                    register: a,
                                    defaultValue: "",
                                    label: "commission ",
                                    name: "commission",
                                    required: "false",
                                    type: "commission",
                                    placeholder: "commission",
                                  }),
                                  Object(l.jsx)(i.a, {
                                    errorName: b.commission,
                                  }),
                                ],
                              }),
                            ],
                          }),
                        }),
                        Object(l.jsx)("div", {
                          className:
                            "p-6 flex-grow scrollbar-hide w-full max-h-full",
                          children: Object(l.jsxs)("div", {
                            className:
                              "grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6",
                            children: [
                              Object(l.jsx)(o.a, {
                                label: "App Android Latest Version",
                              }),
                              Object(l.jsxs)("div", {
                                className: "col-span-8 sm:col-span-4",
                                children: [
                                  Object(l.jsx)(d.a, {
                                    register: a,
                                    defaultValue: "",
                                    label: "App Android Latest Version",
                                    required: "false",
                                    name: "androidVersion",
                                    type: "appAndroidVersion",
                                    placeholder: "App Android Latest Version",
                                  }),
                                  Object(l.jsx)(i.a, {
                                    errorName: b.appAndroidVersion,
                                  }),
                                ],
                              }),
                            ],
                          }),
                        }),
                        Object(l.jsx)("div", {
                          className:
                            "p-6 flex-grow scrollbar-hide w-full max-h-full",
                          children: Object(l.jsxs)("div", {
                            className:
                              "grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6",
                            children: [
                              Object(l.jsx)(o.a, {
                                label: "App IOS Latest Version",
                              }),
                              Object(l.jsxs)("div", {
                                className: "col-span-8 sm:col-span-4",
                                children: [
                                  Object(l.jsx)(d.a, {
                                    register: a,
                                    defaultValue: "",
                                    label: "App IOS Latest Version",
                                    required: "false",
                                    name: "iosVersion",
                                    type: "appIOSVersion",
                                    placeholder: "App IOS Latest Version",
                                  }),
                                  Object(l.jsx)(i.a, {
                                    errorName: b.appIOSVersion,
                                  }),
                                ],
                              }),
                            ],
                          }),
                        }),
                        Object(l.jsx)("div", {
                          className: "flex flex-row-reverse pr-6 pb-6",
                          children: Object(l.jsx)(n.Button, {
                            type: "submit",
                            className: "h-12 px-6",
                            children: "Update Settings",
                          }),
                        }),
                      ],
                    }),
                  }),
          });
        },
        f = a(41),
        y = a(50),
        v = a(57),
        N = a(67),
        S = a(51),
        w = a(45),
        C = a(82),
        k = a(64),
        A = a(54),
        T = a(75),
        P = a(83),
        E = a(84);
      var I = (e) => {
        const {
            isDrawerOpen: t,
            closeDrawer: a,
            setIsUpdate: r,
          } = Object(s.useContext)(h.a),
          {
            register: l,
            handleSubmit: c,
            setValue: n,
            clearErrors: i,
            formState: { errors: o },
          } = Object(b.a)();
        return (
          Object(s.useEffect)(() => {
            if (!t) return n("name"), void i("name");
            e &&
              C.a
                .getChannelsById(e)
                .then((e) => {
                  e && n("name", e.title);
                })
                .catch((e) => {
                  Object(x.b)("There is a server error!");
                });
          }, [e, n, t]),
          {
            register: l,
            handleSubmit: c,
            onSubmit: (t) => {
              let { name: s, type: l } = t;
              if (!s) return void Object(x.b)("name is required!");
              const c = { title: s };
              e
                ? (C.a
                    .updateChannel(e, c)
                    .then((e) => {
                      r(!0), Object(x.c)("Updated successfully");
                    })
                    .catch((e) => Object(x.b)(e.message)),
                  a())
                : (C.a
                    .addChannel(c)
                    .then((e) => {
                      r(!0), Object(x.c)("added successfully");
                    })
                    .catch((e) => Object(x.b)(e.message)),
                  a());
            },
            errors: o,
          }
        );
      };
      var U = (e) => {
          let { id: t } = e;
          const { register: a, handleSubmit: s, onSubmit: r, errors: c } = I(t);
          return Object(l.jsxs)(l.Fragment, {
            children: [
              Object(l.jsx)("div", {
                className:
                  "w-full relative p-6 border-b border-gray-100 bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300",
                children: t
                  ? Object(l.jsx)(P.a, { title: "Update Channel" })
                  : Object(l.jsx)(P.a, { title: "Add Channel" }),
              }),
              Object(l.jsx)(T.Scrollbars, {
                className:
                  "w-full md:w-7/12 lg:w-8/12 xl:w-8/12 relative dark:bg-gray-700 dark:text-gray-200",
                children: Object(l.jsxs)("form", {
                  onSubmit: s(r),
                  children: [
                    Object(l.jsx)("div", {
                      className:
                        "p-6 flex-grow scrollbar-hide w-full max-h-full pb-40",
                      children: Object(l.jsxs)("div", {
                        className:
                          "grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6",
                        children: [
                          Object(l.jsx)(o.a, { label: "Channel" }),
                          Object(l.jsxs)("div", {
                            className: "col-span-8 sm:col-span-4",
                            children: [
                              Object(l.jsx)(d.a, {
                                register: a,
                                label: "Channel title",
                                name: "name",
                                type: "text",
                                placeholder: "Channel title",
                              }),
                              Object(l.jsx)(i.a, { errorName: c.parent }),
                            ],
                          }),
                        ],
                      }),
                    }),
                    Object(l.jsx)(E.a, { id: t, title: "Channel" }),
                  ],
                }),
              }),
            ],
          });
        },
        R = a(58),
        _ = a(76),
        D = a(12);
      var K = (e) => {
        let { channels: t } = e;
        const {
          title: a,
          serviceId: s,
          handleModalOpen: r,
          handleUpdate: c,
        } = Object(R.a)();
        return Object(l.jsxs)(l.Fragment, {
          children: [
            Object(l.jsx)(k.a, { id: s, title: a }),
            Object(l.jsx)(A.a, { children: Object(l.jsx)(U, { id: s }) }),
            Object(l.jsx)(n.TableBody, {
              children:
                null === t || void 0 === t
                  ? void 0
                  : t.map((e) =>
                      Object(l.jsxs)(
                        n.TableRow,
                        {
                          children: [
                            Object(l.jsx)(n.TableCell, {
                              className: "font-medium text-sm",
                              children: Object(l.jsx)("div", {
                                className: "flex flex-row",
                                children: Object(l.jsx)("span", {
                                  className:
                                    "bg-gray-200 mr-2 border-0 text-gray-500 rounded-full inline-flex items-center justify-center px-2 py-1 text-xs font-semibold font-serif mt-2 dark:bg-gray-700 dark:text-gray-300",
                                  children: e.title,
                                }),
                              }),
                            }),
                            Object(l.jsx)(n.TableCell, {
                              children: Object(l.jsx)("span", {
                                className: "text-sm",
                                children: e.description,
                              }),
                            }),
                            Object(l.jsx)(n.TableCell, {
                              children: Object(l.jsx)("span", {
                                className: "text-sm",
                                children: e.members_count,
                              }),
                            }),
                            Object(l.jsx)(n.TableCell, {
                              children: Object(l.jsx)("span", {
                                className: "text-sm",
                                children: e.rooms.length,
                              }),
                            }),
                            Object(l.jsx)(n.TableCell, {
                              children: Object(l.jsx)(_.a, {
                                id: e._id,
                                title: e.title,
                                handleUpdate: c,
                                handleModalOpen: r,
                              }),
                            }),
                            Object(l.jsx)(n.TableCell, {
                              children: Object(l.jsx)("div", {
                                onClick: "/subinterest",
                                className:
                                  "p-2 cursor-pointer hover:text-red-600",
                                children: Object(l.jsx)(D.b, {
                                  to: `/interest/${e._id}/${e.title}`,
                                  children: Object(l.jsx)("span", {
                                    className: "text-sm text-gray-500",
                                    children: "Interests",
                                  }),
                                }),
                              }),
                            }),
                          ],
                        },
                        e._id
                      )
                    ),
            }),
          ],
        });
      };
      var V = () => {
          const { toggleDrawer: e } = Object(s.useContext)(h.a),
            { data: t, loading: a } = Object(y.a)(C.a.getAllChannels),
            {
              categoryRef: r,
              setFilter: c,
              handleChangePage: i,
              totalResults: o,
              resultsPerPage: d,
              dataTable: j,
              serviceData: b,
              handleSubmitCategory: m,
            } = Object(v.a)(t);
          return Object(l.jsxs)(l.Fragment, {
            children: [
              Object(l.jsx)(w.a, { children: "Channels" }),
              Object(l.jsx)(A.a, { children: Object(l.jsx)(U, {}) }),
              Object(l.jsx)(n.Card, {
                className:
                  "min-w-0 shadow-xs overflow-hidden dark:bg-gray-800 mb-5",
                children: Object(l.jsxs)(n.CardBody, {
                  children: [
                    Object(l.jsx)("div", {
                      className:
                        "flex-grow-0 md:flex-grow lg:flex-grow xl:flex-grow",
                    }),
                    Object(l.jsx)("div", {
                      className: "w-full md:w-56 lg:w-56 xl:w-56",
                      children: Object(l.jsxs)(n.Button, {
                        onClick: e,
                        className: "w-full rounded-md h-12",
                        children: [
                          Object(l.jsx)("span", {
                            className: "mr-3",
                            children: Object(l.jsx)(f.f, {}),
                          }),
                          "Add New Channels",
                        ],
                      }),
                    }),
                  ],
                }),
              }),
              a
                ? Object(l.jsx)(S.a, { loading: a })
                : 0 !== b.length
                ? Object(l.jsxs)(n.TableContainer, {
                    className: "mb-8",
                    children: [
                      Object(l.jsxs)(n.Table, {
                        children: [
                          Object(l.jsx)(n.TableHeader, {
                            children: Object(l.jsxs)("tr", {
                              children: [
                                Object(l.jsx)(n.TableCell, {
                                  children: "Name",
                                }),
                                Object(l.jsx)(n.TableCell, {
                                  children: "Description",
                                }),
                                Object(l.jsx)(n.TableCell, {
                                  children: "Subscribers",
                                }),
                                Object(l.jsx)(n.TableCell, {
                                  children: "LiveShows",
                                }),
                                Object(l.jsx)(n.TableCell, {
                                  className: "text-right",
                                  children: "Actions",
                                }),
                              ],
                            }),
                          }),
                          Object(l.jsx)(K, { channels: j }),
                        ],
                      }),
                      Object(l.jsx)(n.TableFooter, {
                        children: Object(l.jsx)(n.Pagination, {
                          totalResults: o,
                          resultsPerPage: d,
                          onChange: i,
                          label: "Table navigation",
                        }),
                      }),
                    ],
                  })
                : Object(l.jsx)(N.a, { title: "Channels" }),
            ],
          });
        },
        F = a(46),
        L = a(77);
      var $ = () => {
          const { id: e } = Object(r.i)(),
            { handleUpdate: t } = Object(R.a)(),
            { data: a, loading: s } = Object(y.a)(() => F.a.getShopById(e));
          return (
            console.log(a),
            Object(l.jsxs)(l.Fragment, {
              children: [
                Object(l.jsx)(A.a, { children: Object(l.jsx)(L.a, { id: e }) }),
                Object(l.jsx)(w.a, { children: "Shop Details" }),
                s
                  ? Object(l.jsx)(S.a, { loading: s })
                  : Object(l.jsx)("div", {
                      className:
                        "inline-block overflow-y-auto h-full align-middle transition-all transform",
                      children: Object(l.jsxs)("div", {
                        className:
                          "flex flex-col lg:flex-row md:flex-row w-full overflow-hidden",
                        children: [
                          Object(l.jsx)("div", {
                            className:
                              "flex-shrink-0 flex items-center justify-center h-auto",
                            children: Object(l.jsx)("img", {
                              src: a.image,
                              width: "350",
                              alt: a.name,
                            }),
                          }),
                          Object(l.jsxs)("div", {
                            className:
                              "w-full flex flex-col p-5 md:p-8 text-left",
                            children: [
                              Object(l.jsxs)("div", {
                                className: "mb-5 block ",
                                children: [
                                  Object(l.jsx)("div", {
                                    className:
                                      "font-serif font-semibold py-1 text-sm",
                                    children: Object(l.jsxs)("p", {
                                      className: "text-sm text-gray-500 pr-4",
                                      children: [
                                        "Status:",
                                        " ",
                                        1 == a.open
                                          ? Object(l.jsx)("span", {
                                              className: "text-green-400",
                                              children: "This shop is open",
                                            })
                                          : Object(l.jsx)("span", {
                                              className: "text-red-400",
                                              children: " This shop is Closed",
                                            }),
                                      ],
                                    }),
                                  }),
                                  Object(l.jsx)("h2", {
                                    className:
                                      "text-heading text-lg md:text-xl lg:text-2xl font-semibold font-serif dark:text-gray-400",
                                    children: a.name,
                                  }),
                                ],
                              }),
                              Object(l.jsx)("p", {
                                className:
                                  "text-sm leading-6 text-gray-500 dark:text-gray-400 md:leading-7",
                                children: a.description,
                              }),
                              Object(l.jsx)("div", {
                                className: "flex flex-col mt-4",
                                children: Object(l.jsxs)("p", {
                                  className:
                                    "font-serif font-semibold py-1 text-gray-500 text-sm",
                                  children: [
                                    Object(l.jsx)("span", {
                                      className:
                                        "text-gray-700 dark:text-gray-400",
                                      children: "Location:",
                                    }),
                                    a.location,
                                  ],
                                }),
                              }),
                            ],
                          }),
                        ],
                      }),
                    }),
              ],
            })
          );
        },
        B = a(123);
      var q = () => {
        const {
            state: { adminInfo: e, token: t },
          } = Object(s.useContext)(j.a),
          {
            register: a,
            handleSubmit: r,
            onSubmit: c,
            errors: b,
          } = Object(B.a)(e._id);
        return Object(l.jsxs)(l.Fragment, {
          children: [
            Object(l.jsx)(w.a, { children: "Shopify Settings" }),
            Object(l.jsx)("div", {
              className:
                "container p-6 mx-auto bg-white  dark:bg-gray-800 dark:text-gray-200 rounded-lg",
              children: Object(l.jsxs)("form", {
                onSubmit: r(c),
                children: [
                  Object(l.jsx)("div", {
                    className: "p-6 flex-grow scrollbar-hide w-full max-h-full",
                    children: Object(l.jsxs)("div", {
                      className:
                        "grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6",
                      children: [
                        Object(l.jsx)(o.a, { label: "Shopify Store Url" }),
                        Object(l.jsxs)("div", {
                          className: "col-span-8 sm:col-span-4",
                          children: [
                            Object(l.jsx)(d.a, {
                              register: a,
                              defaultValue: "",
                              label: "Shopify Shop Url",
                              name: "shopifyUrl",
                              type: "shopifyUrl",
                              placeholder: "Url",
                            }),
                            Object(l.jsx)(i.a, { errorName: b.shopifyUrl }),
                          ],
                        }),
                      ],
                    }),
                  }),
                  Object(l.jsx)("div", {
                    className: "p-6 flex-grow scrollbar-hide w-full max-h-full",
                    children: Object(l.jsxs)("div", {
                      className:
                        "grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6",
                      children: [
                        Object(l.jsx)(o.a, { label: " Access Token" }),
                        Object(l.jsxs)("div", {
                          className: "col-span-8 sm:col-span-4",
                          children: [
                            Object(l.jsx)(d.a, {
                              register: a,
                              defaultValue: "",
                              label: "Shopify Access Token ",
                              name: "shopifyAccessToken",
                              type: "shopifyAccessToken",
                              placeholder: "security key",
                            }),
                            Object(l.jsx)(i.a, {
                              errorName: b.shopifyAccessToken,
                            }),
                          ],
                        }),
                      ],
                    }),
                  }),
                  Object(l.jsx)("div", {
                    className: "flex flex-row-reverse pr-6 pb-6",
                    children: Object(l.jsx)(n.Button, {
                      type: "submit",
                      className: "h-12 px-6",
                      children: "Update Settings",
                    }),
                  }),
                ],
              }),
            }),
          ],
        });
      };
      const W = Object(s.lazy)(() =>
          Promise.all([a.e(4), a.e(31), a.e(23)]).then(a.bind(null, 212))
        ),
        z = Object(s.lazy)(() =>
          Promise.all([a.e(1), a.e(2), a.e(22)]).then(a.bind(null, 197))
        ),
        M = Object(s.lazy)(() =>
          Promise.all([a.e(1), a.e(26)]).then(a.bind(null, 216))
        ),
        Y = Object(s.lazy)(() =>
          Promise.all([a.e(1), a.e(14)]).then(a.bind(null, 198))
        ),
        G = Object(s.lazy)(() => a.e(29).then(a.bind(null, 199))),
        H = Object(s.lazy)(() => a.e(18).then(a.bind(null, 217))),
        J = Object(s.lazy)(() =>
          Promise.all([a.e(1), a.e(27)]).then(a.bind(null, 221))
        ),
        Q = Object(s.lazy)(() => a.e(17).then(a.bind(null, 222))),
        X = Object(s.lazy)(() =>
          Promise.all([a.e(2), a.e(16)]).then(a.bind(null, 200))
        ),
        Z = Object(s.lazy)(() => a.e(24).then(a.bind(null, 223))),
        ee = Object(s.lazy)(() => a.e(21).then(a.bind(null, 201))),
        te = Object(s.lazy)(() => a.e(28).then(a.bind(null, 224))),
        ae = Object(s.lazy)(() => a.e(19).then(a.bind(null, 202))),
        se = Object(s.lazy)(() =>
          Promise.all([a.e(1), a.e(25)]).then(a.bind(null, 218))
        ),
        re = Object(s.lazy)(() =>
          Promise.all([a.e(10), a.e(20)]).then(a.bind(null, 203))
        );
      var le = [
          { path: "/dashboard", component: W },
          { path: "/products", component: z },
          { path: "/shops", component: M },
          { path: "/product/:id", component: G },
          {
            path: "/interest/:id/:title",
            component: Object(s.lazy)(() => a.e(30).then(a.bind(null, 215))),
          },
          { path: "/shop/:id", component: $ },
          { path: "/profile/:id", component: Y },
          { path: "/channels", component: V },
          { path: "/users", component: J },
          { path: "/customer-order/:id", component: Q },
          { path: "/orders", component: X },
          { path: "/rooms", component: se },
          { path: "/order/:id", component: Z },
          { path: "/setting", component: ae },
          { path: "/admins", component: H },
          { path: "/woocommerce", component: ee },
          { path: "/coming-soon", component: te },
          { path: "/shopify", component: q },
          { path: "/settings", component: O },
          { path: "/edit-profile", component: ae },
          { path: "/shippingmethods", component: re },
        ],
        ce = a(78);
      var ne = () => {
          const { toggleSidebar: e } = Object(s.useContext)(h.a),
            { state: t, dispatch: a } = Object(s.useContext)(j.a),
            { adminInfo: r } = t,
            { mode: c, toggleMode: i } = Object(s.useContext)(
              n.WindmillContext
            ),
            [o, d] = Object(s.useState)(!1),
            [b, m] = Object(s.useState)(!1),
            p = Object(s.useRef)(),
            x = Object(s.useRef)();
          console.log(r),
            Object(s.useEffect)(() => {
              document.addEventListener("mousedown", (e) => {
                var t, a;
                (null !== p &&
                  void 0 !== p &&
                  null !== (t = p.current) &&
                  void 0 !== t &&
                  t.contains(e.target)) ||
                  d(!1),
                  (null !== x &&
                    void 0 !== x &&
                    null !== (a = x.current) &&
                    void 0 !== a &&
                    a.contains(e.target)) ||
                    m(!1);
              });
            }, [p, x]);
          return Object(l.jsx)(l.Fragment, {
            children: Object(l.jsx)("header", {
              className: "z-40 py-4 bg-white shadow-sm dark:bg-gray-800",
              children: Object(l.jsxs)("div", {
                className:
                  "container flex items-center justify-between h-full px-6 mx-auto text-green-500 dark:text-green-500",
                children: [
                  Object(l.jsx)("button", {
                    className:
                      "p-1 mr-5 -ml-1 rounded-md lg:hidden focus:outline-none",
                    onClick: e,
                    "aria-label": "Menu",
                    children: Object(l.jsx)(ce.g, {
                      className: "w-6 h-6",
                      "aria-hidden": "true",
                    }),
                  }),
                  Object(l.jsx)("span", {}),
                  Object(l.jsx)("ul", {
                    className:
                      "flex justify-end items-center flex-shrink-0 space-x-6",
                    children: Object(l.jsxs)("li", {
                      className: "relative inline-block text-left",
                      ref: p,
                      children: [
                        Object(l.jsx)("button", {
                          className:
                            "rounded-full dark:bg-gray-500 bg-green-500 text-white h-8 w-8 font-medium mx-auto focus:outline-none",
                          onClick: () => {
                            d(!o), m(!1);
                          },
                          children: r.image
                            ? Object(l.jsx)(n.Avatar, {
                                className: "align-middle",
                                src: `${r.image}`,
                                "aria-hidden": "true",
                              })
                            : Object(l.jsx)("span", {
                                children: r.email[0].toUpperCase(),
                              }),
                        }),
                        o &&
                          Object(l.jsxs)("ul", {
                            className:
                              "origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white dark:bg-gray-800 ring-1 ring-black ring-opacity-5 focus:outline-none",
                            children: [
                              Object(l.jsx)("li", {
                                className:
                                  "justify-between font-serif font-medium py-2 pl-4 transition-colors duration-150 hover:bg-gray-100 text-gray-500 hover:text-green-500 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-gray-200",
                                children: Object(l.jsx)(D.b, {
                                  to: "/dashboard",
                                  children: Object(l.jsxs)("span", {
                                    className: "flex items-center text-sm",
                                    children: [
                                      Object(l.jsx)(ce.e, {
                                        className: "w-4 h-4 mr-3",
                                        "aria-hidden": "true",
                                      }),
                                      Object(l.jsx)("span", {
                                        children: "Dashboard",
                                      }),
                                    ],
                                  }),
                                }),
                              }),
                              Object(l.jsx)("li", {
                                onClick: () => {
                                  a({ type: "USER_LOGOUT" }),
                                    u.a.remove("adminInfo");
                                },
                                className:
                                  "cursor-pointer justify-between font-serif font-medium py-2 pl-4 transition-colors duration-150 hover:bg-gray-100 text-gray-500 hover:text-green-500 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-gray-200",
                                children: Object(l.jsxs)("span", {
                                  className: "flex items-center text-sm",
                                  children: [
                                    Object(l.jsx)(ce.f, {
                                      className: "w-4 h-4 mr-3",
                                      "aria-hidden": "true",
                                    }),
                                    Object(l.jsx)("span", {
                                      children: "Log out",
                                    }),
                                  ],
                                }),
                              }),
                            ],
                          }),
                      ],
                    }),
                  }),
                ],
              }),
            }),
          });
        },
        ie = a.p + "static/media/logo-dark.4cdf8eae.svg",
        oe = a.p + "static/media/logo-light.18446b08.svg";
      var de = [
        { path: "/dashboard", icon: f.d, name: "Dashboard" },
        { path: "/products", icon: f.h, name: "Products" },
        { path: "/channels", icon: f.e, name: "Channels" },
        { path: "/rooms", icon: f.e, name: "TokShows" },
        { path: "/users", icon: f.o, name: "Users" },
        { path: "/orders", icon: f.b, name: "Orders" },
        { path: "/admins", icon: f.n, name: "Admins" },
        {
          icon: f.j,
          name: "Setting",
          routes: [{ path: "/settings", name: "Settings" }],
        },
      ];
      var je = [
        { path: "/dashboard", icon: f.d, name: "Dashboard" },
        { path: "/products", icon: f.h, name: "Products" },
        { path: "/rooms", icon: f.e, name: "TokShows" },
        { path: "/orders", icon: f.b, name: "Orders" },
        {
          icon: f.j,
          name: "Setting",
          routes: [
            { path: "/woocommerce", name: "Woocommerce" },
            { path: "/shopify", name: "Shopify" },
            { path: "/shippingmethods", name: "Shipping Methods" },
          ],
        },
      ];
      var be = (e) => {
        let { route: t } = e;
        const [a, c] = Object(s.useState)(!1);
        return Object(l.jsx)(l.Fragment, {
          children: Object(l.jsxs)(
            "li",
            {
              className: "relative px-6 py-3",
              children: [
                Object(l.jsx)("button", {
                  className:
                    "inline-flex items-center justify-between focus:outline-none w-full text-sm font-semibold transition-colors duration-150 hover:text-green-600 dark:hover:text-gray-200",
                  onClick: () => c(!a),
                  "aria-haspopup": "true",
                  children: Object(l.jsxs)("span", {
                    className: "inline-flex items-center",
                    children: [
                      Object(l.jsx)(t.icon, {
                        className: "w-5 h-5",
                        "aria-hidden": "true",
                      }),
                      Object(l.jsx)("span", {
                        className: "ml-4 mt-1",
                        children: t.name,
                      }),
                      Object(l.jsx)("span", {
                        className: "pl-4 mt-1",
                        children: a
                          ? Object(l.jsx)(ce.b, {})
                          : Object(l.jsx)(ce.c, {}),
                      }),
                    ],
                  }),
                }),
                a &&
                  Object(l.jsx)("ul", {
                    className:
                      "p-2  overflow-hidden text-sm font-medium text-gray-500 rounded-md dark:text-gray-400 dark:bg-gray-900",
                    "aria-label": "submenu",
                    children: t.routes.map((e, a) =>
                      Object(l.jsx)(
                        "li",
                        {
                          children: Object(l.jsxs)(D.c, {
                            to: e.path,
                            className:
                              "flex items-center font-serif py-1 text-sm text-gray-600 hover:text-green-600 cursor-pointer",
                            activeClassName:
                              "text-green-500 dark:text-gray-100",
                            children: [
                              Object(l.jsx)(r.b, {
                                path: e.path,
                                exact: t.exact,
                                children: Object(l.jsx)("span", {
                                  className:
                                    "absolute inset-y-0 left-0 w-1 bg-green-600 rounded-tr-lg rounded-br-lg",
                                  "aria-hidden": "true",
                                }),
                              }),
                              Object(l.jsx)("span", {
                                className: "text-xs text-gray-500 pr-1",
                                children: Object(l.jsx)(ce.h, {}),
                              }),
                              Object(l.jsx)("span", {
                                className:
                                  "text-gray-500 hover:text-green-600 dark:hover:text-gray-200",
                                children: e.name,
                              }),
                            ],
                          }),
                        },
                        a + 1
                      )
                    ),
                  }),
              ],
            },
            t.name
          ),
        });
      };
      var me = () => {
        const { mode: e } = Object(s.useContext)(n.WindmillContext),
          { state: t, dispatch: a } = Object(s.useContext)(j.a),
          { adminInfo: c } = t;
        return Object(l.jsxs)("div", {
          className: "py-4 text-gray-500 dark:text-gray-400",
          children: [
            Object(l.jsx)("a", {
              className: " text-gray-900 dark:text-gray-200",
              href: "/dashboard",
              children:
                "dark" === e
                  ? Object(l.jsx)("img", {
                      src: oe,
                      alt: "vyuu",
                      width: "135",
                      className: "pl-6",
                    })
                  : Object(l.jsx)("img", {
                      src: ie,
                      alt: "vyuu",
                      width: "135",
                      className: "pl-6",
                    }),
            }),
            Object(l.jsx)("ul", {
              className: "mt-8",
              children: ("admin" == c.role ? de : je).map((e) =>
                e.routes
                  ? Object(l.jsx)(be, { route: e }, e.name)
                  : Object(l.jsx)(
                      "li",
                      {
                        className: "relative",
                        children: Object(l.jsxs)(D.c, {
                          exact: !0,
                          to: e.path,
                          className:
                            "px-6 py-4 inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-green-700 dark:hover:text-gray-200",
                          activeClassName: "text-green-500 dark:text-gray-100",
                          children: [
                            Object(l.jsx)(r.b, {
                              path: e.path,
                              exact: e.exact,
                              children: Object(l.jsx)("span", {
                                className:
                                  "absolute inset-y-0 left-0 w-1 bg-green-500 rounded-tr-lg rounded-br-lg",
                                "aria-hidden": "true",
                              }),
                            }),
                            Object(l.jsx)(e.icon, {
                              className: "w-5 h-5",
                              "aria-hidden": "true",
                            }),
                            Object(l.jsx)("span", {
                              className: "ml-4",
                              children: e.name,
                            }),
                          ],
                        }),
                      },
                      e.name
                    )
              ),
            }),
            Object(l.jsx)("span", {
              className:
                "lg:fixed bottom-0 px-6 py-6 w-64 mx-auto relative mt-3 block",
              children: Object(l.jsx)(n.Button, {
                onClick: () => {
                  a({ type: "USER_LOGOUT" }), u.a.remove("adminInfo");
                },
                size: "large",
                className: "w-full",
                children: Object(l.jsxs)("span", {
                  className: "flex items-center",
                  children: [
                    Object(l.jsx)(ce.f, { className: "mr-3 text-lg" }),
                    Object(l.jsx)("span", {
                      className: "text-sm",
                      children: "Log out",
                    }),
                  ],
                }),
              }),
            }),
          ],
        });
      };
      var ue = () => {
        const { mode: e } = Object(s.useContext)(n.WindmillContext),
          { dispatch: t } = Object(s.useContext)(j.a);
        return Object(l.jsxs)("div", {
          className: "py-4 text-gray-500 dark:text-gray-400",
          children: [
            Object(l.jsx)("a", {
              className: " text-gray-900 dark:text-gray-200",
              href: "/dashboard",
              children:
                "dark" === e
                  ? Object(l.jsx)("img", {
                      src: oe,
                      alt: "vyuu",
                      width: "135",
                      className: "pl-6",
                    })
                  : Object(l.jsx)("img", {
                      src: ie,
                      alt: "vyuu",
                      width: "135",
                      className: "pl-6",
                    }),
            }),
            Object(l.jsx)("ul", {
              className: "mt-8",
              children: je.map((e) =>
                e.routes
                  ? Object(l.jsx)(be, { route: e }, e.name)
                  : Object(l.jsx)(
                      "li",
                      {
                        className: "relative",
                        children: Object(l.jsxs)(D.c, {
                          exact: !0,
                          to: e.path,
                          className:
                            "px-6 py-4 inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-green-700 dark:hover:text-gray-200",
                          activeClassName: "text-green-500 dark:text-gray-100",
                          children: [
                            Object(l.jsx)(r.b, {
                              path: e.path,
                              exact: e.exact,
                              children: Object(l.jsx)("span", {
                                className:
                                  "absolute inset-y-0 left-0 w-1 bg-green-500 rounded-tr-lg rounded-br-lg",
                                "aria-hidden": "true",
                              }),
                            }),
                            Object(l.jsx)(e.icon, {
                              className: "w-5 h-5",
                              "aria-hidden": "true",
                            }),
                            Object(l.jsx)("span", {
                              className: "ml-4",
                              children: e.name,
                            }),
                          ],
                        }),
                      },
                      e.name
                    )
              ),
            }),
            Object(l.jsx)("span", {
              className:
                "lg:fixed bottom-0 px-6 py-6 w-64 mx-auto relative mt-3 block",
              children: Object(l.jsx)(n.Button, {
                onClick: () => {
                  t({ type: "USER_LOGOUT" }), u.a.remove("adminInfo");
                },
                size: "large",
                className: "w-full",
                children: Object(l.jsxs)("span", {
                  className: "flex items-center",
                  children: [
                    Object(l.jsx)(ce.f, { className: "mr-3 text-lg" }),
                    Object(l.jsx)("span", {
                      className: "text-sm",
                      children: "Log out",
                    }),
                  ],
                }),
              }),
            }),
          ],
        });
      };
      var pe = () => {
        const { state: e, dispatch: t } = Object(s.useContext)(j.a),
          { adminInfo: a } = e;
        return Object(l.jsx)("aside", {
          className:
            "z-30 flex-shrink-0 hidden shadow-sm w-64 overflow-y-auto bg-white dark:bg-gray-800 lg:block",
          children:
            "admin" == a.role
              ? Object(l.jsx)(me, {})
              : "shopowner" == a.role
              ? Object(l.jsx)(ue, {})
              : Object(l.jsx)(l.Fragment, {}),
        });
      };
      var he = function () {
        const { isSidebarOpen: e, closeSidebar: t } = Object(s.useContext)(h.a);
        return Object(l.jsx)(n.Transition, {
          show: e,
          children: Object(l.jsxs)(l.Fragment, {
            children: [
              Object(l.jsx)(n.Transition, {
                enter: "transition ease-in-out duration-150",
                enterFrom: "opacity-0",
                enterTo: "opacity-100",
                leave: "transition ease-in-out duration-150",
                leaveFrom: "opacity-100",
                leaveTo: "opacity-0",
                children: Object(l.jsx)(n.Backdrop, { onClick: t }),
              }),
              Object(l.jsx)(n.Transition, {
                enter: "transition ease-in-out duration-150",
                enterFrom: "opacity-0 transform -translate-x-20",
                enterTo: "opacity-100",
                leave: "transition ease-in-out duration-150",
                leaveFrom: "opacity-100",
                leaveTo: "opacity-0 transform -translate-x-20",
                children: Object(l.jsx)("aside", {
                  className:
                    "fixed inset-y-0 z-50 flex-shrink-0 w-64 mt-16 overflow-y-auto bg-white dark:bg-gray-800 lg:hidden",
                  children: Object(l.jsx)(me, {}),
                }),
              }),
            ],
          }),
        });
      };
      var xe = () =>
          Object(l.jsxs)(l.Fragment, {
            children: [Object(l.jsx)(pe, {}), Object(l.jsx)(he, {})],
          }),
        ge = a(23);
      const Oe = Object(s.lazy)(() => a.e(3).then(a.bind(null, 220)));
      t.default = () => {
        const { isSidebarOpen: e, closeSidebar: t } = Object(s.useContext)(h.a),
          { state: a, dispatch: n } = Object(s.useContext)(j.a),
          { adminInfo: i } = a;
        let o = Object(r.h)();
        return (
          Object(s.useEffect)(() => {
            t();
          }, [o]),
          Object(l.jsxs)("div", {
            className: `flex h-screen bg-gray-50 dark:bg-gray-900 ${
              e && "overflow-hidden"
            }`,
            children: [
              Object(l.jsx)(xe, {}),
              Object(l.jsxs)("div", {
                className: "flex flex-col flex-1 w-full",
                children: [
                  Object(l.jsx)(ne, {}),
                  Object(l.jsx)(c, {
                    children: Object(l.jsx)(s.Suspense, {
                      fallback: Object(l.jsx)(ge.a, {}),
                      children: Object(l.jsxs)(r.d, {
                        children: [
                          le.map((e, t) =>
                            e.component
                              ? Object(l.jsx)(
                                  r.b,
                                  {
                                    exact: !0,
                                    path: `${e.path}`,
                                    render: (t) =>
                                      Object(l.jsx)(e.component, { ...t }),
                                  },
                                  t
                                )
                              : null
                          ),
                          Object(l.jsx)(r.a, {
                            exact: !0,
                            from: "/",
                            to: "/dashboard",
                          }),
                          Object(l.jsx)(r.b, { component: Oe }),
                        ],
                      }),
                    }),
                  }),
                ],
              }),
            ],
          })
        );
      };
    },
    42: function (e, t, a) {
      "use strict";
      var s = a(70),
        r = a.n(s),
        l = a(8),
        c = a.n(l);
      const n = r.a.create({
        baseURL: "https://api.vyuu.ai",
        timeout: 5e5,
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });
      n.interceptors.request.use(function (e) {
        let t;
        return (
          c.a.get("adminInfo") && (t = JSON.parse(c.a.get("adminInfo"))),
          { ...e, headers: { authorization: t ? `Bearer ${t.token}` : null } }
        );
      });
      const i = (e) => e.data,
        o = {
          get: (e, t, a) => n.get(e, t, a).then(i),
          post: (e, t) => n.post(e, t).then(i),
          put: (e, t, a) => n.put(e, t, a).then(i),
          patch: (e, t) => n.patch(e, t).then(i),
          delete: (e) => n.delete(e).then(i),
        };
      t.a = o;
    },
    43: function (e, t, a) {
      "use strict";
      a(0);
      var s = a(1);
      t.a = (e) => {
        let { errorName: t } = e;
        return Object(s.jsx)(s.Fragment, {
          children:
            t &&
            Object(s.jsx)("span", {
              className: "text-red-400 text-sm mt-2",
              children: t.message,
            }),
        });
      };
    },
    44: function (e, t, a) {
      "use strict";
      a(0);
      var s = a(16),
        r = a(1);
      t.a = (e) => {
        let { label: t } = e;
        return Object(r.jsx)(s.Label, {
          className: "col-span-4 sm:col-span-2 font-medium text-sm",
          children: t,
        });
      };
    },
    45: function (e, t, a) {
      "use strict";
      a(0);
      var s = a(1);
      t.a = (e) => {
        let { children: t } = e;
        return Object(s.jsx)("h1", {
          className: "my-6 text-lg font-bold text-gray-700 dark:text-gray-300",
          children: t,
        });
      };
    },
    46: function (e, t, a) {
      "use strict";
      var s = a(42);
      const r = {
        getAllShops(e) {
          let { page: t, limit: a, title: r } = e;
          const l = null !== r ? r : "";
          return s.a.get(
            `/shop/allshops/paginated?page=${t}&limit=${a}&title=${l}`
          );
        },
        getShopById: (e) => s.a.get(`/shop/shop/${e}`),
        getShopByUserId: (e) => s.a.get(`/shop/${e}`),
        updateShop: (e, t) => s.a.put(`/shop/shop/${e}`, t),
        deleteShop: (e) => s.a.delete(`/shop/shop/${e}`),
        saveShippingMethods: (e, t) =>
          s.a.post(`/shop/shippingmethods/add/${e}`, t),
        getShippingMethods: (e) => s.a.get(`/shop/shippingmethods/${e}`),
      };
      t.a = r;
    },
    47: function (e, t, a) {
      "use strict";
      a(0);
      var s = a(16),
        r = a(1);
      t.a = (e) => {
        let {
          register: t,
          defaultValue: a,
          required: l,
          name: c,
          label: n,
          type: i,
          placeholder: o,
        } = e;
        return Object(r.jsx)(r.Fragment, {
          children: Object(r.jsx)(s.Input, {
            ...t(`${c}`, { required: !l && `${n} is required!` }),
            defaultValue: a,
            type: i,
            placeholder: o,
            name: c,
            className:
              "border h-12 text-sm focus:outline-none block w-full bg-gray-100 dark:bg-white border-transparent focus:bg-white",
          }),
        });
      };
    },
    49: function (e, t, a) {
      "use strict";
      var s = a(42);
      const r = {
        registerAdmin: (e) => s.a.post("/admin/register", e),
        loginAdmin: (e) => s.a.post("/admin/login", e),
        loginUser: (e) => s.a.post("/login", e),
        authenticateUser: (e) => s.a.post("/authenticate/social", e),
        forgetPassword: (e) => s.a.put("/admin/forget-password", e),
        resetPassword: (e) => s.a.put("/admin/reset-password", e),
        signUpWithProvider: (e) => s.a.post("/admin/signup", e),
        addAdmin: (e) => s.a.post("/admin", e),
        getAllAdmin: () => s.a.get("/admin"),
        getAdminById: (e) => s.a.get(`/admin/id/${e}`),
        updateAdmin: (e, t) => s.a.patch(`/admin/${e}`, t),
        deleteAdmin: (e) => s.a.delete(`/admin/${e}`),
        updateAppSettings: (e) => s.a.post("/admin/app/settings", e),
        getAppSettings: () => s.a.get("/admin/app/settings"),
      };
      t.a = r;
    },
    50: function (e, t, a) {
      "use strict";
      var s = a(70),
        r = a.n(s),
        l = a(0),
        c = a(17);
      t.a = (e) => {
        const [t, a] = Object(l.useState)([] || !1),
          [s, n] = Object(l.useState)(""),
          [i, o] = Object(l.useState)(!0),
          {
            isUpdate: d,
            setIsUpdate: j,
            currentPage: b,
            category: m,
            searchText: u,
            status: p,
            zone: h,
            time: x,
            sortedField: g,
            source: O,
            limitData: f,
          } = Object(l.useContext)(c.a);
        return (
          Object(l.useEffect)(() => {
            let t = !1,
              s = r.a.CancelToken.source();
            return (
              e({ cancelToken: s.token })
                .then((e) => {
                  t || (a(e), n(""), o(!1));
                })
                .catch((e) => {
                  t ||
                    (n(e.message), r.a.isCancel(e), n(e.message), o(!1), a([]));
                }),
              j(!1),
              () => {
                (t = !0), s.cancel("Cancelled in cleanup");
              }
            );
          }, [d, b, m, u, p, h, x, g, O, f]),
          { data: t, error: s, loading: i }
        );
      };
    },
    51: function (e, t, a) {
      "use strict";
      a(0);
      var s = a(151),
        r = a.n(s),
        l = a(1);
      t.a = (e) => {
        let { loading: t } = e;
        return Object(l.jsx)("div", {
          className: "text-lg text-center py-6",
          children: Object(l.jsx)(r.a, {
            color: "#34D399",
            loading: t,
            height: 25,
            width: 3,
            radius: 3,
            margin: 4,
          }),
        });
      };
    },
    54: function (e, t, a) {
      "use strict";
      var s = a(0),
        r = a.n(s),
        l = a(176),
        c = a(41),
        n = a(17),
        i = a(1);
      const o = (e) => {
        let { children: t } = e;
        const {
          toggleDrawer: a,
          isDrawerOpen: r,
          closeDrawer: o,
        } = Object(s.useContext)(n.a);
        return Object(i.jsxs)(l.a, {
          open: r,
          onClose: o,
          parent: null,
          level: null,
          placement: "right",
          children: [
            Object(i.jsx)("button", {
              onClick: a,
              className:
                "absolute focus:outline-none z-50 text-red-500 hover:bg-red-100 hover:text-gray-700 transition-colors duration-150 bg-white shadow-md mr-6 mt-6 right-0 left-auto w-10 h-10 rounded-full block text-center",
              children: Object(i.jsx)(c.p, { className: "mx-auto" }),
            }),
            Object(i.jsx)("div", {
              className: "flex flex-col w-full h-full justify-between",
              children: t,
            }),
          ],
        });
      };
      t.a = r.a.memo(o);
    },
    56: function (e, t, a) {
      "use strict";
      var s = a(42);
      const r = {
        getAllProducts(e) {
          let {
            page: t,
            limit: a,
            category: r,
            title: l,
            price: c,
            userid: n,
          } = e;
          const i = null !== r ? r : "",
            o = null !== l ? l : "",
            d = null !== c ? c : "",
            j = null !== n ? n : "";
          return s.a.get(
            `/products/paginated/allproducts?page=${t}&limit=${a}&category=${i}&title=${o}&price=${d}&userid=${j}`
          );
        },
        getStockOutProducts: () => s.a.get("/products/stock-out"),
        getProductById: (e) => s.a.get(`/products/products/${e}`),
        addProduct: (e) => s.a.post("/products/add", e),
        addAllProducts: (e) => s.a.post("/products/all", e),
        updateProduct: (e, t) => s.a.put(`/products/products/${e}`, t),
        updateStatus: (e, t) => s.a.put(`/products/status/${e}`, t),
        deleteProduct: (e) => s.a.delete(`/products/${e}`),
      };
      t.a = r;
    },
    57: function (e, t, a) {
      "use strict";
      var s = a(48),
        r = a(117),
        l = a.n(r),
        c = a(150),
        n = a.n(c),
        i = a(0),
        o = a(2),
        d = a(56),
        j = a(18);
      t.a = (e) => {
        const [t, a] = Object(i.useState)(null),
          [r, c] = Object(i.useState)(""),
          [b, m] = Object(i.useState)(""),
          [u, p] = Object(i.useState)(""),
          [h, x] = Object(i.useState)(""),
          [g, O] = Object(i.useState)(""),
          [f, y] = Object(i.useState)(""),
          [v, N] = Object(i.useState)([]),
          [S, w] = Object(i.useState)([]),
          [C, k] = Object(i.useState)([]),
          [A, T] = Object(i.useState)(""),
          [P, E] = Object(i.useState)(""),
          [I, U] = Object(i.useState)(""),
          [R, _] = Object(i.useState)(1),
          [D, K] = Object(i.useState)([]),
          [V, F] = Object(i.useState)(""),
          [L, $] = Object(i.useState)(""),
          [B, q] = Object(i.useState)(""),
          [W] = Object(i.useState)([]),
          z = Object(i.useRef)(""),
          M = Object(i.useRef)(""),
          Y = Object(i.useRef)(""),
          G = Object(i.useRef)(""),
          H = Object(i.useRef)("");
        s.extend(l.a), s.extend(n.a);
        const J = Object(o.h)(),
          Q = Object(i.useMemo)(() => {
            const a = new Date();
            a.setDate(a.getDate() - I);
            let l = e;
            if ("/dashboard" === J.pathname) {
              var c, n, i, o, d, j;
              const e =
                null === (c = l) || void 0 === c
                  ? void 0
                  : c.filter((e) => "Pending" === e.status);
              N(e);
              const t =
                null === (n = l) || void 0 === n
                  ? void 0
                  : n.filter((e) => "Processing" === e.status);
              w(t);
              const a =
                null === (i = l) || void 0 === i
                  ? void 0
                  : i.filter((e) => "Delivered" === e.status);
              k(a);
              const r =
                  null === (o = l) || void 0 === o
                    ? void 0
                    : o.filter((e) => s(e.createdAt).isToday()),
                b =
                  null === r || void 0 === r
                    ? void 0
                    : r.reduce((e, t) => e + t.total, 0);
              F(b);
              const m =
                  null === (d = l) || void 0 === d
                    ? void 0
                    : d.filter((e) =>
                        s(e.createdAt).isBetween(
                          new Date().setDate(new Date().getDate() - 30),
                          new Date()
                        )
                      ),
                u =
                  null === m || void 0 === m
                    ? void 0
                    : m.reduce((e, t) => e + t.total, 0);
              $(u);
              const p =
                null === (j = l) || void 0 === j
                  ? void 0
                  : j.reduce((e, t) => e + t.total, 0);
              q(p);
            }
            return (
              t && (l = l.filter((e) => e.parent === t)),
              "Low" === r && (l = l.sort((e, t) => e.price < t.price && -1)),
              "High" === r && (l = l.sort((e, t) => e.price > t.price && -1)),
              b &&
                (l = l.filter((e) =>
                  e.title.toLowerCase().includes(b.toLowerCase())
                )),
              f &&
                (l = l.filter((e) =>
                  e.type.toLowerCase().includes(f.toLowerCase())
                )),
              P && (l = l.filter((e) => e.role === P)),
              u &&
                (l = l.filter((e) => {
                  var t, a;
                  return (
                    e.name.toLowerCase().includes(u.toLowerCase()) ||
                    (null === e ||
                    void 0 === e ||
                    null === (t = e.phone) ||
                    void 0 === t
                      ? void 0
                      : t.toLowerCase().includes(u.toLowerCase())) ||
                    (null === e ||
                    void 0 === e ||
                    null === (a = e.email) ||
                    void 0 === a
                      ? void 0
                      : a.toLowerCase().includes(u.toLowerCase()))
                  );
                })),
              h &&
                (l = l.filter(
                  (e) =>
                    e.title.toLowerCase().includes(h.toLowerCase()) ||
                    e.couponCode.toLowerCase().includes(h.toLowerCase())
                )),
              A && (l = l.filter((e) => e.status === A)),
              g &&
                (l = l.filter((e) =>
                  e.contact.toLowerCase().includes(g.toLowerCase())
                )),
              I &&
                (l = l.filter((e) => s(e.createdAt).isBetween(a, new Date()))),
              l
            );
          }, [t, r, e, b, u, h, g, f, A, P, I, J]),
          X = null === Q || void 0 === Q ? void 0 : Q.length;
        Object(i.useEffect)(() => {
          K(null === Q || void 0 === Q ? void 0 : Q.slice(8 * (R - 1), 8 * R));
        }, [Q, R, 8]);
        return {
          userRef: M,
          searchRef: z,
          couponRef: Y,
          orderRef: G,
          categoryRef: H,
          pending: v,
          processing: S,
          delivered: C,
          todayOrder: V,
          monthlyOrder: L,
          totalOrder: B,
          setFilter: a,
          setSortedField: c,
          setStatus: T,
          setRole: E,
          setTime: U,
          handleChangePage: (e) => {
            _(e);
          },
          totalResults: X,
          resultsPerPage: 8,
          dataTable: D,
          serviceData: Q,
          handleSubmitUser: (e) => {
            e.preventDefault(), p(M.current.value);
          },
          handleSubmitForAll: (e) => {
            e.preventDefault(), m(z.current.value);
          },
          handleSubmitCoupon: (e) => {
            e.preventDefault(), x(Y.current.value);
          },
          handleSubmitOrder: (e) => {
            e.preventDefault(), O(G.current.value);
          },
          handleSubmitCategory: (e) => {
            e.preventDefault(), y(H.current.value);
          },
          handleOnDrop: (e) => {
            for (let t = 0; t < e.length; t++) W.push(e[t].data);
          },
          handleUploadProducts: () => {
            W.length < 1
              ? Object(j.b)("Please upload/select csv file first!")
              : d.a
                  .addAllProducts(W)
                  .then((e) => {
                    Object(j.c)(e.message);
                  })
                  .catch((e) => Object(j.b)(e.message));
          },
        };
      };
    },
    58: function (e, t, a) {
      "use strict";
      var s = a(0),
        r = a(17);
      t.a = () => {
        const [e, t] = Object(s.useState)(""),
          [a, l] = Object(s.useState)(""),
          {
            toggleDrawer: c,
            isDrawerOpen: n,
            toggleModal: i,
          } = Object(s.useContext)(r.a);
        return (
          Object(s.useEffect)(() => {
            n || t();
          }, [n]),
          {
            title: a,
            serviceId: e,
            setServiceId: t,
            handleModalOpen: (e, a) => {
              t(e), i(), l(a);
            },
            handleUpdate: (e) => {
              t(e), c();
            },
          }
        );
      };
    },
    60: function (e, t, a) {
      "use strict";
      a(0);
      var s = a(172),
        r = a(1);
      t.a = (e) => {
        let { id: t, Icon: a, title: l, bgColor: c } = e;
        return Object(r.jsxs)(r.Fragment, {
          children: [
            Object(r.jsx)("p", {
              "data-tip": !0,
              "data-for": t,
              children: Object(r.jsx)(a, {}),
            }),
            Object(r.jsx)(s.a, {
              id: t,
              backgroundColor: c,
              children: Object(r.jsx)("span", {
                className: "text-sm font-medium",
                children: l,
              }),
            }),
          ],
        });
      };
    },
    64: function (e, t, a) {
      "use strict";
      var s = a(0),
        r = a.n(s),
        l = a(2),
        c = a(16),
        n = a(41),
        i = a(65),
        o = a(49),
        d = a(56),
        j = a(17),
        b = a(18),
        m = a(58),
        u = a(46),
        p = a(82),
        h = a(1);
      const x = (e) => {
        let { id: t, title: a } = e;
        const {
            isModalOpen: r,
            closeModal: x,
            setIsUpdate: g,
          } = Object(s.useContext)(j.a),
          { setServiceId: O } = Object(m.a)(),
          f = Object(l.h)();
        return Object(h.jsx)(h.Fragment, {
          children: Object(h.jsxs)(c.Modal, {
            isOpen: r,
            onClose: x,
            children: [
              Object(h.jsxs)(c.ModalBody, {
                className: "text-center custom-modal px-8 pt-6 pb-4",
                children: [
                  Object(h.jsx)("span", {
                    className: "flex justify-center text-3xl mb-6 text-red-500",
                    children: Object(h.jsx)(n.k, {}),
                  }),
                  Object(h.jsxs)("h2", {
                    className: "text-xl font-medium mb-1",
                    children: [
                      "Are You Sure! Want to Delete",
                      " ",
                      Object(h.jsx)("span", {
                        className: "text-red-500",
                        children: a,
                      }),
                      " Record?",
                    ],
                  }),
                  Object(h.jsx)("p", {
                    children:
                      "Do you really want to delete these records? You can't view this in your list anymore if you delete!",
                  }),
                ],
              }),
              "true" ===
              Object({
                NODE_ENV: "production",
                PUBLIC_URL: "",
                WDS_SOCKET_HOST: void 0,
                WDS_SOCKET_PATH: void 0,
                WDS_SOCKET_PORT: void 0,
                FAST_REFRESH: !0,
                REACT_APP_API_BASE_URL: "https://api.vyuu.ai",
              }).REACT_APP_DEV_STATUS
                ? Object(h.jsx)("div", {
                    className: "justify-center",
                    children: "This is demo, you cannot delete anything",
                  })
                : Object(h.jsxs)(c.ModalFooter, {
                    className: "justify-center",
                    children: [
                      Object(h.jsx)(c.Button, {
                        className:
                          "w-full sm:w-auto hover:bg-white hover:border-gray-50",
                        layout: "outline",
                        onClick: x,
                        children: "No, Keep It",
                      }),
                      Object(h.jsx)(c.Button, {
                        onClick: () => {
                          "/products" === f.pathname &&
                            (d.a
                              .updateProduct(t, { deleted: !0 })
                              .then((e) => {
                                g(!0),
                                  Object(b.c)("product deleted successfully");
                              })
                              .catch((e) => Object(b.b)(e.message)),
                            x(),
                            O()),
                            "interests" === a &&
                              (p.a
                                .deleteInterest(t)
                                .then((e) => {
                                  g(!0), Object(b.c)("sub interest deleted");
                                })
                                .catch((e) => Object(b.b)(e.message)),
                              x(),
                              O()),
                            "/channels" === f.pathname &&
                              (p.a
                                .deleteChannel(t)
                                .then((e) => {
                                  g(!0), Object(b.c)("channel deleted");
                                })
                                .catch((e) => Object(b.b)(e.message)),
                              x(),
                              O()),
                            "/shops" === f.pathname &&
                              (u.a
                                .deleteShop(t)
                                .then((e) => {
                                  g(!0), Object(b.c)("shop deleted");
                                })
                                .catch((e) => Object(b.b)(e.message)),
                              x(),
                              O()),
                            "/users" === f.pathname &&
                              (i.a
                                .deleteUser(t)
                                .then((e) => {
                                  g(!0), Object(b.c)("user deleted");
                                })
                                .catch((e) => Object(b.b)(e.message)),
                              x(),
                              O()),
                            "/admins" === f.pathname &&
                              (o.a
                                .deleteAdmin(t)
                                .then((e) => {
                                  g(!0), Object(b.c)("admin deleted");
                                })
                                .catch((e) => Object(b.b)(e.message)),
                              x(),
                              O());
                        },
                        className: "w-full sm:w-auto",
                        children: "Yes, Delete It",
                      }),
                    ],
                  }),
            ],
          }),
        });
      };
      t.a = r.a.memo(x);
    },
    65: function (e, t, a) {
      "use strict";
      var s = a(42);
      const r = {
        getAllUsers(e) {
          let { page: t, limit: a, title: r } = e;
          const l = null !== r ? r : "";
          return s.a.get(`/users/allusers?page=${t}&limit=${a}&title=${l}`);
        },
        getUserById: (e) => s.a.get(`/users/${e}`),
        updateUserById: (e, t) => s.a.put(`/users/${e}`, t),
        deleteUser: (e) => s.a.delete(`/users/${e}`),
      };
      t.a = r;
    },
    67: function (e, t, a) {
      "use strict";
      a(0);
      var s = a.p + "static/media/no-result.ec22e94c.svg",
        r = a(1);
      t.a = (e) => {
        let { title: t } = e;
        return Object(r.jsxs)("div", {
          className: "text-center align-middle mx-auto p-5 my-5",
          children: [
            Object(r.jsx)("img", {
              className: "my-4",
              src: s,
              alt: "no-result",
              width: "400",
            }),
            Object(r.jsxs)("h2", {
              className:
                "text-lg md:text-xl lg:text-2xl xl:text-2xl text-center mt-2 font-medium font-serif text-gray-600",
              children: [
                "Sorry, we can not find this ",
                t,
                Object(r.jsx)("span", {
                  role: "img",
                  "aria-labelledby": "img",
                  children: "\ud83d\ude1e",
                }),
              ],
            }),
          ],
        });
      };
    },
    76: function (e, t, a) {
      "use strict";
      var s = a(0),
        r = a(41),
        l = a(11),
        c = a(60),
        n = a(1);
      t.a = (e) => {
        let { id: t, handleUpdate: a, handleModalOpen: i, title: o } = e;
        const { state: d } = Object(s.useContext)(l.a),
          { adminInfo: j } = d;
        return Object(n.jsx)(n.Fragment, {
          children: Object(n.jsxs)("div", {
            className: "flex justify-end text-right",
            children: [
              Object(n.jsx)("div", {
                onClick: () => a(t),
                className:
                  "p-2 cursor-pointer text-gray-400 hover:text-green-600",
                children: Object(n.jsx)(c.a, {
                  id: "edit",
                  Icon: r.c,
                  title: "Edit",
                  bgColor: "#10B981",
                }),
              }),
              Object(n.jsx)("div", {
                onClick: () => i(t, o),
                className:
                  "p-2 cursor-pointer text-gray-400 hover:text-red-600",
                children: Object(n.jsx)(c.a, {
                  id: "delete",
                  Icon: r.k,
                  title: "Delete",
                  bgColor: "#EF4444",
                }),
              }),
            ],
          }),
        });
      };
    },
    77: function (e, t, a) {
      "use strict";
      var s = a(0),
        r = a.n(s),
        l = a(75),
        c = a(16),
        n = a(128),
        i = a(83),
        o = a(43),
        d = a(44),
        j = a(47),
        b = a(121),
        m = a(84),
        u = a(122),
        p = a(103),
        h = a(1);
      const x = (e) => {
        let { id: t } = e;
        const {
          register: a,
          watch: s,
          updateImages: r,
          handleSubmit: x,
          onSubmit: g,
          updateProductImages: O,
          errors: f,
          imageUrl: y,
          setImageUrl: v,
          tag: N,
          setTag: S,
          variations: w,
          setVariations: C,
        } = Object(p.a)(t);
        return Object(h.jsxs)(h.Fragment, {
          children: [
            Object(h.jsx)("div", {
              className:
                "w-full relative p-6 border-b border-gray-100 bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300",
              children: t
                ? Object(h.jsx)(i.a, {
                    title: "Update Product",
                    description:
                      "Updated your product and necessary information from here",
                  })
                : Object(h.jsx)(i.a, {
                    title: "Add Product",
                    description:
                      "Add your product and necessary information from here",
                  }),
            }),
            Object(h.jsx)(l.Scrollbars, {
              className:
                "w-full md:w-7/12 lg:w-8/12 xl:w-8/12 relative dark:bg-gray-700 dark:text-gray-200",
              children: Object(h.jsxs)("form", {
                onSubmit: x(g),
                className: "block",
                children: [
                  Object(h.jsxs)("div", {
                    className:
                      "px-6 pt-8 flex-grow w-full h-full max-h-full pb-40 md:pb-32 lg:pb-32 xl:pb-32",
                    children: [
                      Object(h.jsxs)("div", {
                        className:
                          "grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6",
                        children: [
                          Object(h.jsx)(d.a, { label: "Product Image" }),
                          Object(h.jsx)("div", {
                            className: "col-span-8 sm:col-span-4",
                            children: Object(h.jsx)(u.a, {
                              imageUrl: y,
                              setImageUrl: v,
                              updateProductImages: x(O),
                              id: t,
                            }),
                          }),
                        ],
                      }),
                      Object(h.jsxs)("div", {
                        className:
                          "grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6",
                        children: [
                          Object(h.jsx)(d.a, { label: "Product Title/Name" }),
                          Object(h.jsxs)("div", {
                            className: "col-span-8 sm:col-span-4",
                            children: [
                              Object(h.jsx)(j.a, {
                                register: a,
                                label: "Product Title/Name",
                                name: "title",
                                type: "text",
                                placeholder: "Product title",
                              }),
                              Object(h.jsx)(o.a, { errorName: f.title }),
                            ],
                          }),
                        ],
                      }),
                      Object(h.jsxs)("div", {
                        className:
                          "grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6",
                        children: [
                          Object(h.jsx)(d.a, { label: "Product Description" }),
                          Object(h.jsxs)("div", {
                            className: "col-span-8 sm:col-span-4",
                            children: [
                              Object(h.jsx)(c.Textarea, {
                                className:
                                  "border text-sm focus:outline-none block w-full bg-gray-100 border-transparent focus:bg-white",
                                ...a("description", {
                                  required: "Description is required!",
                                }),
                                name: "description",
                                placeholder: "Product details",
                                rows: "4",
                                spellCheck: "false",
                              }),
                              Object(h.jsx)(o.a, { errorName: f.description }),
                            ],
                          }),
                        ],
                      }),
                      Object(h.jsxs)("div", {
                        className:
                          "grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6",
                        children: [
                          Object(h.jsx)(d.a, {
                            label: "Unit (green, pieces, 1kg, 2kg...etc)",
                          }),
                          Object(h.jsxs)("div", {
                            className: "col-span-8 sm:col-span-4",
                            children: [
                              Object(h.jsx)(j.a, {
                                register: a,
                                label: "Unit",
                                name: "variations",
                                type: "text",
                                placeholder: "Unit",
                              }),
                              Object(h.jsx)(o.a, { errorName: f.unit }),
                            ],
                          }),
                        ],
                      }),
                      Object(h.jsxs)("div", {
                        className:
                          "grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6",
                        children: [
                          Object(h.jsx)(d.a, { label: "Product Quantity" }),
                          Object(h.jsxs)("div", {
                            className: "col-span-8 sm:col-span-4",
                            children: [
                              Object(h.jsx)(b.a, {
                                register: a,
                                maxValue: 1e3,
                                minValue: 0,
                                label: "Quantity",
                                name: "quantity",
                                type: "number",
                                placeholder: "Quantity",
                              }),
                              Object(h.jsx)(o.a, { errorName: f.quantity }),
                            ],
                          }),
                        ],
                      }),
                      Object(h.jsxs)("div", {
                        className:
                          "grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6",
                        children: [
                          Object(h.jsx)(d.a, { label: "Discounted Price" }),
                          Object(h.jsxs)("div", {
                            className: "col-span-8 sm:col-span-4",
                            children: [
                              Object(h.jsx)(b.a, {
                                register: a,
                                label: "Price",
                                name: "originalPrice",
                                type: "number",
                                placeholder: "Price",
                              }),
                              Object(h.jsx)(o.a, {
                                errorName: f.originalPrice,
                              }),
                            ],
                          }),
                        ],
                      }),
                      Object(h.jsxs)("div", {
                        className:
                          "grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6",
                        children: [
                          Object(h.jsx)(d.a, { label: "Regular Price" }),
                          Object(h.jsxs)("div", {
                            className: "col-span-8 sm:col-span-4",
                            children: [
                              Object(h.jsx)(b.a, {
                                register: a,
                                maxValue: 2e3,
                                minValue: 1,
                                defaultValue: "0",
                                required: "false",
                                label: "Sale price",
                                name: "salePrice",
                                type: "number",
                                placeholder: "Sale price",
                              }),
                              Object(h.jsx)(o.a, { errorName: f.salePrice }),
                            ],
                          }),
                        ],
                      }),
                      Object(h.jsxs)("div", {
                        className:
                          "grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6",
                        children: [
                          Object(h.jsx)(d.a, { label: "Variations" }),
                          Object(h.jsx)("div", {
                            className: "col-span-8 sm:col-span-4",
                            children: Object(h.jsx)(n.a, {
                              placeholder:
                                "Product Tag (Write then press enter to add new tag )",
                              tags: w,
                              onChange: (e) => C(e),
                            }),
                          }),
                        ],
                      }),
                    ],
                  }),
                  Object(h.jsx)(m.a, { id: t, title: "Product" }),
                ],
              }),
            }),
          ],
        });
      };
      t.a = r.a.memo(x);
    },
    82: function (e, t, a) {
      "use strict";
      var s = a(42);
      const r = {
        getAllChannels: () => s.a.get("/channels"),
        getInterest: (e) => s.a.get(`/interests/all/${e}`),
        getInterestById: (e) => s.a.get(`/interests/${e}`),
        getChannelsById: (e) => s.a.get(`/channels/${e}`),
        addChannel: (e) => s.a.post("/channels", e),
        addInterest: (e) => s.a.post("/interests", e),
        updateInterest: (e, t) => s.a.put(`/interests/${e}`, t),
        updateChannel: (e, t) => s.a.put(`/channels/${e}`, t),
        deleteChannel: (e) => s.a.delete(`/channels/${e}`),
        deleteInterest: (e) => s.a.delete(`/interests/${e}`),
      };
      t.a = r;
    },
    83: function (e, t, a) {
      "use strict";
      a(0);
      var s = a(1);
      t.a = (e) => {
        let { title: t, description: a } = e;
        return Object(s.jsx)(s.Fragment, {
          children: Object(s.jsxs)("div", {
            children: [
              Object(s.jsx)("h4", {
                className: "text-xl font-medium",
                children: t,
              }),
              Object(s.jsx)("p", { className: "mb-0 text-sm", children: a }),
            ],
          }),
        });
      };
    },
    84: function (e, t, a) {
      "use strict";
      var s = a(0),
        r = a(17),
        l = a(16),
        c = a(41),
        n = a(1);
      t.a = (e) => {
        let { id: t, title: a } = e;
        const { toggleDrawer: i } = Object(s.useContext)(r.a),
          [o, d] = Object(s.useState)(!1),
          [j, b] = Object(s.useState)(!1);
        return Object(n.jsxs)(n.Fragment, {
          children: [
            Object(n.jsxs)("div", {
              className:
                "fixed bottom-0 w-full right-0 py-4 lg:py-8 px-6 grid gap-4 lg:gap-6 xl:gap-6 md:flex xl:flex bg-gray-50 border-t border-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300",
              children: [
                Object(n.jsx)("div", {
                  className:
                    "flex-grow-0 md:flex-grow lg:flex-grow xl:flex-grow",
                  children: Object(n.jsx)(l.Button, {
                    onClick: i,
                    className:
                      "h-12 bg-white w-full text-red-500 hover:bg-red-50 hover:border-red-100 hover:text-red-600 dark:bg-gray-700 dark:border-gray-700 dark:text-gray-500 dark:hover:bg-gray-800 dark:hover:text-red-700",
                    layout: "outline",
                    children: "Cancel",
                  }),
                }),
                Object(n.jsx)("div", {
                  className:
                    "flex-grow-0 md:flex-grow lg:flex-grow xl:flex-grow",
                  children:
                    "true" ===
                    Object({
                      NODE_ENV: "production",
                      PUBLIC_URL: "",
                      WDS_SOCKET_HOST: void 0,
                      WDS_SOCKET_PATH: void 0,
                      WDS_SOCKET_PORT: void 0,
                      FAST_REFRESH: !0,
                      REACT_APP_API_BASE_URL: "https://api.vyuu.ai",
                    }).REACT_APP_DEV_STATUS
                      ? Object(n.jsxs)(l.Button, {
                          onClick: () => {
                            d(!0), i();
                          },
                          className: "w-full h-12",
                          children: [
                            " ",
                            t
                              ? Object(n.jsxs)("span", {
                                  children: ["Update ", a],
                                })
                              : Object(n.jsxs)("span", {
                                  children: ["Add ", a],
                                }),
                          ],
                        })
                      : Object(n.jsxs)(l.Button, {
                          type: "submit",
                          className: "w-full h-12",
                          children: [
                            " ",
                            t
                              ? Object(n.jsxs)("span", {
                                  children: ["Update ", a],
                                })
                              : Object(n.jsxs)("span", {
                                  children: ["Add ", a],
                                }),
                          ],
                        }),
                }),
              ],
            }),
            Object(n.jsxs)(l.Modal, {
              isOpen: o,
              onClose: j,
              children: [
                Object(n.jsxs)(l.ModalBody, {
                  className: "text-center custom-modal px-8 pt-6 pb-4",
                  children: [
                    Object(n.jsx)("span", {
                      className:
                        "flex justify-center text-3xl mb-6 text-red-500",
                      children: Object(n.jsx)(c.k, {}),
                    }),
                    Object(n.jsxs)("h2", {
                      className: "text-xl font-medium mb-1",
                      children: [
                        "This is demo, update is disabled for",
                        " ",
                        Object(n.jsx)("span", {
                          className: "text-red-500",
                          children: a,
                        }),
                        " Record?",
                      ],
                    }),
                  ],
                }),
                Object(n.jsx)(l.ModalFooter, {
                  className: "justify-center",
                  children: Object(n.jsx)(l.Button, {
                    className:
                      "w-full sm:w-auto hover:bg-white hover:border-gray-50",
                    layout: "outline",
                    onClick: () => {
                      d(!1), i();
                    },
                    children: "Okay",
                  }),
                }),
              ],
            }),
            ";",
          ],
        });
      };
    },
  },
]);
//# sourceMappingURL=9.04ad39d2.chunk.js.map

(this.webpackJsonptokshop = this.webpackJsonptokshop || []).push([
  [13],
  {
    193: function (e, t, a) {
      "use strict";
      a.r(t);
      var s = a(16),
        r = a(43),
        n = a(44),
        i = a(47),
        c = a(85),
        l = a(1);
      t.default = () => {
        const {
          onSubmit: e,
          register: t,
          handleSubmit: a,
          errors: o,
          loading: d,
        } = Object(c.a)();
        return Object(l.jsx)(l.Fragment, {
          children: Object(l.jsx)("div", {
            className:
              "flex items-center min-h-screen p-6 bg-gray-50 dark:bg-gray-900",
            children: Object(l.jsx)("div", {
              className:
                "flex-1 h-full max-w-4xl mx-auto overflow-hidden bg-white rounded-lg shadow-xl dark:bg-gray-800",
              children: Object(l.jsxs)("div", {
                className: "flex flex-col overflow-y-auto",
                children: [
                  Object(l.jsx)("div", {
                    className: "h-32 md:h-auto md:w-1/2",
                  }),
                  Object(l.jsx)("main", {
                    className:
                      "flex items-center justify-center p-6 sm:p-12 md:w-1/1",
                    children: Object(l.jsxs)("div", {
                      className: "w-1/2 ",
                      children: [
                        Object(l.jsx)("h1", {
                          className:
                            "flex justify-center text-2xl items-center font-semibold text-gray-700 dark:text-gray-200",
                          children: "Vyuu Admin",
                        }),
                        Object(l.jsxs)("form", {
                          onSubmit: a(e),
                          children: [
                            Object(l.jsx)(n.a, { label: "Email" }),
                            Object(l.jsx)(i.a, {
                              register: t,
                              defaultValue: "admin@gmail.com",
                              label: "Email",
                              name: "email",
                              type: "email",
                              placeholder: "john@doe.com",
                            }),
                            Object(l.jsx)(r.a, { errorName: o.email }),
                            Object(l.jsx)("div", { className: "mt-6" }),
                            Object(l.jsx)(n.a, { label: "Password" }),
                            Object(l.jsx)(i.a, {
                              register: t,
                              defaultValue: "123456",
                              label: "Password",
                              name: "password",
                              type: "password",
                              placeholder: "***************",
                            }),
                            Object(l.jsx)(r.a, { errorName: o.password }),
                            Object(l.jsx)("div", { className: "mt-6" }),
                            Object(l.jsx)(s.Button, {
                              disabled: d,
                              type: "submit",
                              className: "mt-4 h-12 w-full",
                              to: "/dashboard",
                              children: "Log in",
                            }),
                            Object(l.jsx)("div", { className: "mt-6" }),
                            Object(l.jsx)("div", { className: "my-10" }),
                          ],
                        }),
                        Object(l.jsxs)("div", {
                          className: "flex flex-col text-white",
                          children: [
                            Object(l.jsx)("h3", {
                              className: "text-1xl font-semibold",
                              children: "Test Logins",
                            }),
                            Object(l.jsx)("div", {
                              children: "Email: admin@gmail.com",
                            }),
                            Object(l.jsx)("div", {
                              children: "Password: 123456",
                            }),
                          ],
                        }),
                      ],
                    }),
                  }),
                ],
              }),
            }),
          }),
        });
      };
    },
    42: function (e, t, a) {
      "use strict";
      var s = a(70),
        r = a.n(s),
        n = a(8),
        i = a.n(n);
      const c = r.a.create({
        baseURL: "https://api.vyuu.ai",
        timeout: 5e5,
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });
      c.interceptors.request.use(function (e) {
        let t;
        return (
          i.a.get("adminInfo") && (t = JSON.parse(i.a.get("adminInfo"))),
          { ...e, headers: { authorization: t ? `Bearer ${t.token}` : null } }
        );
      });
      const l = (e) => e.data,
        o = {
          get: (e, t, a) => c.get(e, t, a).then(l),
          post: (e, t) => c.post(e, t).then(l),
          put: (e, t, a) => c.put(e, t, a).then(l),
          patch: (e, t) => c.patch(e, t).then(l),
          delete: (e) => c.delete(e).then(l),
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
    47: function (e, t, a) {
      "use strict";
      a(0);
      var s = a(16),
        r = a(1);
      t.a = (e) => {
        let {
          register: t,
          defaultValue: a,
          required: n,
          name: i,
          label: c,
          type: l,
          placeholder: o,
        } = e;
        return Object(r.jsx)(r.Fragment, {
          children: Object(r.jsx)(s.Input, {
            ...t(`${i}`, { required: !n && `${c} is required!` }),
            defaultValue: a,
            type: l,
            placeholder: o,
            name: i,
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
    85: function (e, t, a) {
      "use strict";
      var s = a(8),
        r = a.n(s),
        n = a(0),
        i = a(53),
        c = a(2),
        l = a(11),
        o = a(49),
        d = a(18);
      t.a = () => {
        const [e, t] = Object(n.useState)(!1),
          { dispatch: a } = Object(n.useContext)(l.a),
          s = Object(c.g)(),
          m = Object(c.h)(),
          {
            register: p,
            handleSubmit: u,
            formState: { errors: b },
          } = Object(i.a)();
        return {
          onSubmit: (e) => {
            let { name: n, email: i, verifyEmail: c, password: l, role: p } = e;
            t(!0);
            "/login" === m.pathname &&
              o.a
                .loginAdmin({ email: i, password: l })
                .then((e) => {
                  e &&
                    (t(!1),
                    Object(d.c)("Login Success!"),
                    a({ type: "USER_LOGIN", payload: e.user }),
                    (e.user.token = e.accesstoken),
                    (e.user.role = "admin"),
                    r.a.set("adminInfo", JSON.stringify(e.user), {
                      expires: 0.5,
                    }),
                    s.replace("/"));
                })
                .catch((e) => {
                  Object(d.b)(e ? e.response.data.message : e.message), t(!1);
                }),
              "/signup" === m.pathname &&
                o.a
                  .registerAdmin({ name: n, email: i, password: l, role: p })
                  .then((e) => {
                    e &&
                      (t(!1),
                      Object(d.c)("Register Success!"),
                      a({ type: "USER_LOGIN", payload: e }),
                      r.a.set("adminInfo", JSON.stringify(e), { expires: 0.5 }),
                      s.replace("/"));
                  })
                  .catch((e) => {
                    Object(d.b)(e ? e.response.data.message : e.message), t(!1);
                  }),
              "/forgot-password" === m.pathname &&
                o.a
                  .forgetPassword({ verifyEmail: c })
                  .then((e) => {
                    t(!1), Object(d.c)(e.message);
                  })
                  .catch((e) => {
                    t(!1), Object(d.b)(e ? e.response.data.message : e.message);
                  });
          },
          register: p,
          handleSubmit: u,
          errors: b,
          loading: e,
        };
      };
    },
  },
]);
//# sourceMappingURL=13.faf1b620.chunk.js.map

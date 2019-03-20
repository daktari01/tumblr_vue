import AuthBase from "../../components/AuthBase";
import UserRegistration from "../../components/UserRegistration";
import UserLogin from "../../components/UserLogin";

const auth = [
  {
    path: "/auth",
    component: AuthBase,
    children: [
      {
        path: "signup",
        component: UserRegistration
      },
      {
        path: "signin",
        component: UserLogin
      },
      {
        path: "signout"
      }
    ]
  }
];

export default auth;

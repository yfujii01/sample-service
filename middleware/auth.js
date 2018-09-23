export default function({ route, store, redirect }) {
  // ログインしていない場合、ログイン画面を表示する
  if (!store.state.authUser && route.path !== "/login") {
    return redirect("/login");
  }
}

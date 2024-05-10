/**
 * router: 必填，useRouter()
 * path: 必填 路由路径
 * query: 传参
 * isSeleft: 是否当前页打开，默认新页面
 */

export const $Route = (router, path, query, isSelf) => {
  const page = router.resolve({
    path: path,
    query: query || {}
  })
  window.open(page.href, isSelf ? '_self' : '_blank')
}

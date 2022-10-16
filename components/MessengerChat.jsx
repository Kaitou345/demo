import React from "react"

const MessengerChat = ({ pageId }) => {
  if (typeof window != "undefined") {
    window.fbAsyncInit = function () {
      FB.init({
        xfbml: true,
        version: "v14.0",
      })
    }
    ;(function (d, s, id) {
      var js,
        fjs = d.getElementsByTagName(s)[0]
      if (d.getElementById(id)) return
      js = d.createElement(s)
      js.id = id
      js.src = "https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js"
      fjs.parentNode.insertBefore(js, fjs)
    })(document, "script", "facebook-jssdk")
  }

  return (
    <div>
      <div id="fb-root"></div>

      <div
        id="fb-customer-chat"
        className="fb-customerchat"
        page_id={pageId}
        attribution="biz_inbox"
      ></div>

      <script></script>
    </div>
  )
}

export default MessengerChat

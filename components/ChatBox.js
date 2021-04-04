import $ from "jquery";
import React from "react";
import Image from "next/image";
import "malihu-custom-scrollbar-plugin";
import "malihu-custom-scrollbar-plugin/jquery.mCustomScrollbar.css";
import styles from "@/styles/Chat.module.css";

require("jquery-mousewheel");

export default class ChatBox extends React.Component {
  componentDidMount() {
    let $messages = $("#message-content"),
      d,
      h,
      m,
      i = 0;

    $messages.mCustomScrollbar();
    setTimeout(function () {
      fakeMessage();
    }, 100);

    function updateScrollbar() {
      $messages
        .mCustomScrollbar("update")
        .mCustomScrollbar("scrollTo", "bottom", {
          scrollInertia: 10,
          timeout: 0,
        });
    }

    function setDate() {
      d = new Date();
      if (m != d.getMinutes()) {
        m = d.getMinutes();
        $(
          "<div class='timestamp'>" + d.getHours() + ":" + m + "</div>"
        ).appendTo($(".message:last"));
      }
    }

    function insertMessage() {
      let msg = $("#message-input").val();
      if ($.trim(msg) == "") {
        return false;
      }
      $("<div class='message message-personal'>" + msg + "</div>")
        .appendTo($(".mCSB_container"))
        .addClass("new");
      setDate();
      $("#message-input").val(null);
      updateScrollbar();
      setTimeout(function () {
        fakeMessage();
      }, 1000 + Math.random() * 20 * 100);
    }

    $("#message-submit").click(function () {
      insertMessage();
    });

    $(window).on("keydown", function (e) {
      if (e.which == 13) {
        insertMessage();
        return false;
      }
    });

    let Fake = [
      "Hi there, I'm AL and you?",
      "Nice to meet you",
      "How are you?",
      "Not too bad, thanks",
      "What do you do?",
      "That's awesome",
      "I think you're a nice person",
      "Why do you think that?",
      "Can you explain?",
      "Anyway I've gotta go now",
      "It was a pleasure chat with you",
      "Bye",
      ":)",
    ];

    function fakeMessage() {
      if ($("#message-input").val() != "") {
        return false;
      }
      $(
        '<div class="message loading new"><figure class="avatar"><img height="10px" width="10px" src="/logo.png" /></figure><span></span></div>'
      ).appendTo($(".mCSB_container"));
      updateScrollbar();

      setTimeout(function () {
        $(".message.loading").remove();
        $(
          '<div class="message new"><figure class="avatar"><img height="10px" width="10px" src="/logo.png" /></figure>' +
            Fake[i] +
            "</div>"
        )
          .appendTo($(".mCSB_container"))
          .addClass("new");
        setDate();
        updateScrollbar();
        i++;
      }, 1000 + Math.random() * 20 * 100);
    }
  }
  render() {
    return (
      <div className={styles.bg}>
        <div className={styles.chat}>
          <div className={styles.chatTitle}>
            <figure className={styles.avatar}>
              <Image width="30%" height="30%" src={"/logo.png"} alt="avatar" />
            </figure>
            <h1>Alfred Pennyworth</h1>
            <h2>Financial Bot</h2>
          </div>
          <div className={styles.messages}>
            <div id="message-content" className={styles.messagesContent}></div>
          </div>
          <div className={styles.messageBox}>
            <textarea
              id="message-input"
              className={styles.messageInput}
              placeholder="Type message..."
            ></textarea>
            <button
              id="message-submit"
              type="submit"
              className={styles.messageSubmit}
            >
              Send
            </button>
          </div>
        </div>
      </div>
    );
  }
}

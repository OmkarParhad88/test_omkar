sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
    "sap/m/MessageBox",
], (Controller, MessageToast, MessageBox) => {
    "use strict";

    return Controller.extend("testomkarr.controller.View1", {
        onInit() {
        },
        onSuccessDialog: function () {
            // var gvrNumbers = gvrRes.map(result => result.GvrNo).join(", ");
            var gvrNumbers = "1000000226";

            var messages = `GvrNo: <b>${gvrNumbers}</b> \n${gvrNumbers}: ${gvrNumbers}`;

            var oVBox = new sap.m.VBox({
                alignItems: "Center",
                width: "100%",
                items: [
                    new sap.m.HBox({
                    alignItems: "Center",
                    width: "100%",
                    items: [
                        new sap.m.Text({
                            text: "GvrNo : "
                        }),
                        new sap.m.Input({
                            value: gvrNumbers,
                            editable: false,
                        }),
                        new sap.ui.core.Icon({
                            src: "sap-icon://copy",
                            size: "1.3rem",
                            color: "#4d78e5",
                            tooltip: "Copy to Clipboard",
                            press: function () {
                                copyToClipboard(gvrNumbers);
                                MessageToast.show("GvrNo copied to clipboard!" + gvrNumbers);
                            }
                        }).addStyleClass("boldText")
                    ]
                }),
                new sap.m.HBox({
                    alignItems: "Center",
                    width: "100%",
                    items: [
                        new sap.m.Text({
                            text: "S : "
                        }),
                        new sap.m.Text({
                            text: " Gvr created successfully"
                        }),
                    ]
                })]
            }).addStyleClass("customDialogContent");


            function copyToClipboard(text) {
                var tempInput = document.createElement("textarea");
                tempInput.value = text;
                document.body.appendChild(tempInput);
                tempInput.select();
                document.execCommand("copy");
                document.body.removeChild(tempInput);
            }
            function onVHRGVRNumber(text) {
                var tempInput = document.createElement("textarea");
                tempInput.value = text;
                document.body.appendChild(tempInput);
                tempInput.select();
                document.execCommand("copy");
                document.body.removeChild(tempInput);
            }
            var oDialog = new sap.m.Dialog({
                showHeader: true, // Show the custom header
                customHeader: new sap.m.Bar({
                    contentMiddle: [
                        new sap.ui.core.Icon({
                            src: "sap-icon://message-success",
                            size: "1.5rem",
                            color: "green"
                        }),
                        new sap.m.Title({ text: "GVR Response", level: "H1" })
                    ]
                }),
                content: [oVBox],
                beginButton: new sap.m.Button({
                    text: "Close",
                    press: function () {
                        oDialog.close();
                    }
                })
            });

            oDialog.open();

        }

    });
});
// Connection of the family viewer page to the broker (MQTT over WebSockets).
// The user must be READ-ONLY ("Subscribe only") and limited to the topic filter gpxgt/v1/share/#:
// this file is public, and without the key in each link it only sees encrypted bytes.
window.GPXGT_CONFIG = {
  brokerUrl: "wss://430a4ecb2f7a4632bac898f75fd26c4d.s1.eu.hivemq.cloud:8884/mqtt",
  username: "familia",
  password: "familiagpx"
};

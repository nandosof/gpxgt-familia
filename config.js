// Connection of the family viewer page to the broker (MQTT over WebSockets).
// The user must be READ-ONLY ("Subscribe only") and limited to the topic filter gpxgt/v1/share/#:
// this file is public, and without the key in each link it only sees encrypted bytes.
window.GPXGT_CONFIG = {
  brokerUrl: "wss://gpxgt-mqtt.duckdns.org:8884/mqtt",
  username: "familia",
  password: "familiagpx"
};

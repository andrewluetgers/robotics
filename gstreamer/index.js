var gstreamer = require("./gstreamer");

gstreamer.start({
	url: "rtsp://wowzaec2demo.streamlock.net/vod/mp4:BigBuckBunny_115k.mov",
	//url: "rtsp://192.168.1.92:554//1",
	port: 80,
	quiet: false
});
module.exports = router => {
  router.get("/", (req, res) => {
    const io = req.app.get("socketio");

    io.emit(req.body.id, {
      text: req.body.text
    });
    res.json({
      success: "ok",
      notif: {
        text: req.body.text,
        type: req.body.type,
        status: req.body.status
      }
    });
  });

  return router;
};

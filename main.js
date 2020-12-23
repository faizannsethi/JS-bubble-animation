function fadeIn() {
  // body...
  var intervalID = setInterval(show(), 20);
}

async function show() {
  // body...
  const ballsarray = [];
  const ballsarrayparam = [];
  var balls = Math.floor(Math.random() * 7 + 2);
  var count = 1;
  while (count <= balls) {
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
    var x = Math.floor(Math.random() * 1000 + 50);
    var y = Math.floor(Math.random() * 500 + 50);
    var r = Math.floor(Math.random() * 100 + 30);
    ctx.beginPath();
    ctx.arc(x, y, r, 0, 2 * Math.PI);
    ctx.fillStyle = "red";
    ctx.fill();
    ballsarray.push(ctx);
    ctx.strokeStyle = "white";

    ctx.stroke();
    ballsarrayparam.push({ x, y, r });

    count += 1;
  }

  while (true) {
    await new Promise((r) => setTimeout(r, 2000));

    var bar_ = document.getElementById("bar");

    var opacity = Number(
      window.getComputedStyle(bar_).getPropertyValue("opacity")
    );

    if (opacity > 0.5) {
      opacity -= 0.5;
      bar_.style.opacity = opacity;
    } else {
      opacity += 0.5;
      bar_.style.opacity = opacity;
    }
    for (var i = 0; i <= ballsarray.length - 1; i++) {
      var x = ballsarrayparam[i].x;
      var y = ballsarrayparam[i].y;
      var r = ballsarrayparam[i].r;

      if (r < 100) {
        r += 10;
        var ctx = c.getContext("2d");
        ctx.beginPath();
        ctx.arc(x, y, r, 0, 2 * Math.PI);
        ctx.fillStyle = "red";
        ctx.fill();

        ballsarray[i] = ctx;
        ctx.strokeStyle = "white";

        ctx.stroke();
        ballsarrayparam[i] = { x, y, r };
      } else {
        var ctx = c.getContext("2d");
        ctx.beginPath();
        ctx.arc(x, y, r, 0, 2 * Math.PI);
        ctx.fillStyle = "white";
        ctx.fill();

        ctx.strokeStyle = "white";

        ctx.stroke();
        var x = Math.floor(Math.random() * 1000 + 50);
        var y = Math.floor(Math.random() * 500 + 50);
        var r = Math.floor(Math.random() * 100 + 30);
        var ctx = c.getContext("2d");
        ctx.beginPath();
        ctx.arc(x, y, r, 0, 2 * Math.PI);
        ctx.fillStyle = "red";
        ctx.fill();

        ballsarray[i] = ctx;
        ctx.strokeStyle = "white";

        ctx.stroke();
        ballsarrayparam[i] = { x, y, r };

        ballsarrayparam[i] = { x, y, r };
        ballsarray[i] = ctx;
      }
    }
  }
}

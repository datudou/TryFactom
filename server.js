import Koa from 'koa'
const app = new Koa();

app.use((ctx,next)=>{
    const start = new Date;
    return next().then(()=>{
        const ms = new Date - start;
        console.log(`${ctx.method} ${ctx.url} - ${ms}`);
    });
});


app.use(ctx=>{
    ctx.body = "Hello World";
});

app.listen(3000,function(){
    console.log("server is listening at port 3000");
});
export default app;

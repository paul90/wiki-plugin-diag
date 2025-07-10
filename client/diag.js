/* wiki-plugin-diag - 0.1.1 - Thu, 10 Jul 2025 15:44:42 GMT */
(()=>{var l,r,p,g;g=e=>e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/\*(.+?)\*/g,"<i>$1</i>");r=[".diag"];p=(e,t)=>{var d=performance.now();e[0].consuming=[],e.addClass("output-item"),console.log("diag emit "+t.id+" at "+d),console.trace(),e.append(`
    <table>
      <tr><th>ID</th><td>${t.id}</td></tr>
      <tr><th>Emit Time</th><td>${d}</td></tr>
    </table>
    <hr>`),e.dblclick(()=>wiki.textEditor(e,t))};l=(e,t)=>{var d=performance.now();e.find("table").append(`
    <tr><th>Bind Time</th><td>${d}</td></tr>`);let n=$(`.item:lt(${$(".item").index(e)})`).filter(".diag").last();if(console.log("diag bind "+t.id+" at "+d),console.trace(),typeof n.data("id")<"u"){let a=$(n).closest(".page").data("key"),o=$(n).data("id");console.log("onPage",a);let i=`${a}/${o}`;console.log("pageItem",i),e[0].consuming.push(i),e.find("table").append(`
      <tr><th>Previous Item ID</th><td>${o}</td></tr>`)}};typeof window<"u"&&window!==null&&(window.plugins.diag={consumes:r,emit:p,bind:l});var s=typeof window>"u"?{expand:g}:void 0;})();
//# sourceMappingURL=diag.js.map

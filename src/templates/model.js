module.exports=function(dust){var tmpl=(function(dust){dust.register("src\/templates\/model",body_0);function body_0(chk,ctx){return chk.w("import ").nx(ctx.get(["typeref"], false),ctx,{"block":body_1},{}).x(ctx.get(["primitiveImports"], false),ctx,{"block":body_2},{}).w(" from 'app/api/NotTerribleModel';\n").s(ctx.get(["imports"], false),ctx,{"block":body_6},{}).w("\n").x(ctx.get(["doc"], false),ctx,{"block":body_7},{}).w("\n").nx(ctx.get(["typeref"], false),ctx,{"else":body_9,"block":body_10},{}).w("\n");}body_0.__dustBody=!0;function body_1(chk,ctx){return chk.w("Model");}body_1.__dustBody=!0;function body_2(chk,ctx){return chk.nx(ctx.get(["typeref"], false),ctx,{"block":body_3},{}).w("{ ").s(ctx.get(["primitiveImports"], false),ctx,{"block":body_4},{}).w(" }");}body_2.__dustBody=!0;function body_3(chk,ctx){return chk.w(", ");}body_3.__dustBody=!0;function body_4(chk,ctx){return chk.f(ctx.getPath(true, []),ctx,"h").h("sep",ctx,{"block":body_5},{},"h");}body_4.__dustBody=!0;function body_5(chk,ctx){return chk.w(", ");}body_5.__dustBody=!0;function body_6(chk,ctx){return chk.w("import ").f(ctx.get(["name"], false),ctx,"h").w(" from \"app/models/").f(ctx.get(["path"], false),ctx,"h").w("\";\n");}body_6.__dustBody=!0;function body_7(chk,ctx){return chk.w("/**\n").s(ctx.get(["doc"], false),ctx,{"block":body_8},{}).w(" */");}body_7.__dustBody=!0;function body_8(chk,ctx){return chk.w(" * ").f(ctx.getPath(true, []),ctx,"h",["s"]).w("\n");}body_8.__dustBody=!0;function body_9(chk,ctx){return chk.w("export default ").f(ctx.get(["typeref"], false),ctx,"h").w(";");}body_9.__dustBody=!0;function body_10(chk,ctx){return chk.w("export default class ").f(ctx.get(["name"], false),ctx,"h").w(" extends Model {\n  static schema = ").x(ctx.get(["includes"], false),ctx,{"block":body_11},{}).w("{\n    ").s(ctx.get(["fields"], false),ctx,{"block":body_13},{}).w("\n  }").x(ctx.get(["includes"], false),ctx,{"block":body_16},{}).w("\n\n  static modelType = \"").f(ctx.get(["modelName"], false),ctx,"h").w("\"\n}");}body_10.__dustBody=!0;function body_11(chk,ctx){return chk.w("Object.assign({}, ").s(ctx.get(["includes"], false),ctx,{"block":body_12},{});}body_11.__dustBody=!0;function body_12(chk,ctx){return chk.f(ctx.getPath(true, []),ctx,"h").w(".schema, ");}body_12.__dustBody=!0;function body_13(chk,ctx){return chk.w("/**\n     * @property ").f(ctx.get(["name"], false),ctx,"h").w("\n").s(ctx.get(["doc"], false),ctx,{"block":body_14},{}).w("     */\n    ").f(ctx.get(["name"], false),ctx,"h").w(": ").f(ctx.get(["type"], false),ctx,"h",["s"]).h("sep",ctx,{"block":body_15},{},"h");}body_13.__dustBody=!0;function body_14(chk,ctx){return chk.w("     * ").f(ctx.getPath(true, []),ctx,"h",["s"]).w("\n");}body_14.__dustBody=!0;function body_15(chk,ctx){return chk.w(",\n\n    ");}body_15.__dustBody=!0;function body_16(chk,ctx){return chk.w(")");}body_16.__dustBody=!0;return body_0}(dust));var f=function load(ctx, cb) {
      var fn = cb ? 'render' : 'stream';
      return dust[fn](tmpl, ctx, cb);
    };f.template=tmpl;return f}

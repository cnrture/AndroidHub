import com.varabyte.kobweb.api.Apis
import com.varabyte.kobweb.api.ApisFactory
import com.varabyte.kobweb.api.`data`.MutableData
import com.varabyte.kobweb.api.`init`.InitApiContext
import com.varabyte.kobweb.api.env.Environment
import com.varabyte.kobweb.api.event.Events
import com.varabyte.kobweb.api.log.Logger

public class ApisFactoryImpl : ApisFactory {
    override fun create(
        env: Environment,
        events: Events,
        logger: Logger,
    ): Apis {
        val data = MutableData()
        val apis = Apis(env, data, logger)
        apis.register("/addpost") { ctx -> com.canerture.androidhub.api.addPost(ctx) }
        apis.register("/deleteselectedposts") { ctx ->
                com.canerture.androidhub.api.deleteSelectedPosts(ctx) }
        apis.register("/readlatestposts") { ctx -> com.canerture.androidhub.api.readLatestPosts(ctx)
                }
        apis.register("/readmainposts") { ctx -> com.canerture.androidhub.api.readMainPosts(ctx) }
        apis.register("/readmyposts") { ctx -> com.canerture.androidhub.api.readMyPosts(ctx) }
        apis.register("/readpopularposts") { ctx ->
                com.canerture.androidhub.api.readPopularPosts(ctx) }
        apis.register("/readselectedpost") { ctx ->
                com.canerture.androidhub.api.readSelectedPost(ctx) }
        apis.register("/readsponsoredposts") { ctx ->
                com.canerture.androidhub.api.readSponsoredPosts(ctx) }
        apis.register("/searchposts") { ctx -> com.canerture.androidhub.api.searchPostsByTitle(ctx)
                }
        apis.register("/searchpostsbycategory") { ctx ->
                com.canerture.androidhub.api.searchPostsByCategory(ctx) }
        apis.register("/updatepost") { ctx -> com.canerture.androidhub.api.updatePost(ctx) }
        val initCtx = InitApiContext(env, apis, data, events, logger)
        com.canerture.androidhub.data.initMongoDB(initCtx)

        return apis
    }
}

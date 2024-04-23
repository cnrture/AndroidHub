package com.canerture.androidhub.serialization

import kotlinx.serialization.SerialName
import kotlinx.serialization.Serializable

@Serializable
data class GetPostsResponse(
    val posts: List<Post>,
    val status: Int,
    val message: String
)

@Serializable
data class Post(
    val id: Int,
    @SerialName("post_author") val postAuthor: String,
    @SerialName("post_date") val postDate: String,
    @SerialName("post_date_gmt") val postDateGmt: String,
    @SerialName("post_content") val postContent: String,
    @SerialName("post_title") val postTitle: String,
    @SerialName("post_name") val postName: String,
    @SerialName("post_modified") val postModified: String,
    @SerialName("post_modified_gmt") val postModifiedGmt: String,
    @SerialName("comment_count") val commentCount: String,
)
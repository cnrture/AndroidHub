package com.canerture.androidhub.data.model

enum class Category : CategoryColor {
    Technology {
        override val color: String
            get() = "#FF0000"
    },
    Programming {
        override val color: String
            get() = "#00FF00"
    },
    Design {
        override val color: String
            get() = "#0000FF"
    }
}

interface CategoryColor {
    val color: String
}
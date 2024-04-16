package com.canerture.androidhub

import android.app.Application
import com.canerture.androidhub.di.initKoin
import org.koin.android.ext.koin.androidContext

class ValorantCMPApp : Application() {
    override fun onCreate() {
        super.onCreate()
        initKoin {
            androidContext(this@ValorantCMPApp)
            modules(viewModelModule)
        }
    }
}
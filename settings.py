import sys
import os

BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

STATICFILES_DIRS = (
    os.path.join(BASE_DIR, 'src'), # We do this so that django's collectstatic copies or our bundles to the STATIC_ROOT or syncs them to whatever storage we use.
)

WEBPACK_LOADER = {
    'BUNDLE_DIR_NAME': 'dist/',
    'STATS_FILE': os.path.join(BASE_DIR, 'webpack-stats.json'),
}

INSTALLED_APPS = (
 ...
 'webpack_loader',
)

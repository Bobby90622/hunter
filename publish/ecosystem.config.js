module.exports = {
  /**
   * Application configuration section
   * http://pm2.keymetrics.io/docs/usage/application-declaration/
   */
  apps: [

    // First application
    {
      name: 'hunter',
      script: 'server.js',
      'log_file': '/var/log/hunter/hunter.log',
      'error_file': '/var/log/hunter/hunter-err.log',
      'out_file': '/var/log/hunter/hunter-out.log',
      'instances': 4,
      'exec_mode': 'cluster',
      'max_memory_restart': '500M',
      env: {
        COMMON_VARIABLE: 'true'
      },
      env_test: {
        NODE_ENV: 'test'
      },
      env_production: {
        NODE_ENV: 'production',
        'port': 8201
      }
    }
  ],

  /**
   * Deployment section
   * http://pm2.keymetrics.io/docs/usage/deployment/
   */
  deploy: {
    production: {
      user: 'root',
      host: '47.75.185.211',
      ref: 'origin/master',
      key: 'build/id_rsa',
      repo: 'git@github.com:Bobby90622/hunter.git',
      path: '/srv/hunter',
      'post-deploy': 'npm i && npm run publish_build && npm run publish_start',
      env: {
        NODE_ENV: 'production'
      }
    }
  }
}

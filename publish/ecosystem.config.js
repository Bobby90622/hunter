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
      'log_file': process.env.NODE_ENV === 'test' ? '/tmp/hmlyweb/himalaya.log' : '/var/log/himalaya-web/himalaya.log',
      'error_file': process.env.NODE_ENV === 'test' ? '/tmp/hmlyweb/himalaya-err.log' : '/var/log/himalaya/himalaya-err.log',
      'out_file': process.env.NODE_ENV === 'test' ? '/tmp/hmlyweb/himalaya-out.log' : '/var/log/himalaya-web/himalaya-out.log',
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
        'port': 3478
      }
    }
  ],

  /**
   * Deployment section
   * http://pm2.keymetrics.io/docs/usage/deployment/
   */
  deploy: {
    test: {
      user: 'root',
      host: '192.168.3.60',
      ref: 'origin/test',
      key: 'build/id_rsa',
      repo: 'git@gitlab.ximalaya.com:FEM/himalaya-web.git',
      path: '/srv/nodejs/himalaya-web',
      'post-deploy': 'npm i && npm run test_build && npm run test_start',
      env: {
        NODE_ENV: 'production'
      }
    }
  }
}

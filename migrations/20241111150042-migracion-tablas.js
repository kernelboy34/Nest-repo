'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    // Crear tabla roles
    await queryInterface.createTable('roles', {
      idroles: {
        autoIncrement: true,
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true
      },
      name: {
        type: Sequelize.STRING(45),
        allowNull: false
      },
      is_deleted: {
        type: Sequelize.TINYINT,
        allowNull: true,
        defaultValue: 0
      }
    });

    // Crear tabla user
    await queryInterface.createTable('usuarios', {
      iduser: {
        autoIncrement: true,
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true
      },
      rols_idrols:{
        type:Sequelize.INTEGER,
        allowNull:false,
        references:{
          model: 'roles', 
          key: 'idroles'
        }
      },
      name: {
        type: Sequelize.STRING(45),
        allowNull: false
      },
      email:{
        type: Sequelize.STRING(255),
        allowNull: false
      },
      password: {
        type: Sequelize.STRING(255),
        allowNull:false
      },
      is_deleted: {
        type: Sequelize.TINYINT,
        allowNull: true,
        defaultValue: 0
      }
    });

    // Crear tabla departments
    await queryInterface.createTable('departamentos', {
      iddepartments: {
        autoIncrement: true,
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true
      },
      name: {
        type: Sequelize.STRING(45),
        allowNull: false
      },
      address: {
        type: Sequelize.STRING(45),
        allowNull: false
      },
      is_deleted: {
        type: Sequelize.TINYINT,
        allowNull: true,
        defaultValue: 0
      }
    });

    // Crear tabla products
    await queryInterface.createTable('productos', {
      idproducts: {
        autoIncrement: true,
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true
      },
      name: {
        type: Sequelize.STRING(45),
        allowNull: true
      },
      imageUrl: {
        type: Sequelize.STRING(255),
        allowNull: true
      },
      unitPrice: {
        type: Sequelize.DECIMAL(10, 2),
        allowNull: true
      },
      is_deleted: {
        type: Sequelize.TINYINT,
        allowNull: true,
        defaultValue: 0
      }
    });

    // Crear tabla sizes
    await queryInterface.createTable('tamanos', {
      idsizes: {
        autoIncrement: true,
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true
      },
      name: {
        type: Sequelize.STRING(45),
        allowNull: true
      },
      is_deleted: {
        type: Sequelize.TINYINT,
        allowNull: true,
        defaultValue: 0
      }
    });

    // Crear tabla stocks
    await queryInterface.createTable('existencias', {
      idstocks: {
        autoIncrement: true,
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true
      },
      branches_idbranches: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'departamentos',
          key: 'iddepartments'
        }
      },
      products_idproducts: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'productos',
          key: 'idproducts'
        }
      },
      quantity: {
        type: Sequelize.INTEGER,
        allowNull: true
      },
      is_deleted: {
        type: Sequelize.TINYINT,
        allowNull: true,
        defaultValue: 0
      }
    });

    // Crear tabla sales
    await queryInterface.createTable('ventas', {
      idsales: {
        autoIncrement: true,
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true
      },
      user_iduser: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'usuarios',
          key: 'iduser'
        }
      },
      date_sale: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
      },
      status: {
        type: Sequelize.TINYINT,
        allowNull: true
      },
      is_deleted: {
        type: Sequelize.TINYINT,
        allowNull: true,
        defaultValue: 0
      }
    });

    // Crear tabla bills
    await queryInterface.createTable('facturas', {
      idbills: {
        autoIncrement: true,
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true
      },
      sales_idsales: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'ventas',
          key: 'idsales'
        }
      },
      total_price: {
        type: Sequelize.DECIMAL(10, 2),
        allowNull: true
      },
      is_deleted: {
        type: Sequelize.TINYINT,
        allowNull: true,
        defaultValue: 0
      }
    });

    // Crear tabla product_sizes
    await queryInterface.createTable('tamanoProductos', {
      idproduct_sizes: {
        autoIncrement: true,
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true
      },
      products_idproducts: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'productos',
          key: 'idproducts'
        }
      },
      sizes_idsizes: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'tamanos',
          key: 'idsizes'
        }
      },
      amount: {
        type: Sequelize.DECIMAL(10, 2),
        allowNull: true
      },
      is_deleted: {
        type: Sequelize.TINYINT,
        allowNull: true,
        defaultValue: 0
      }
    });

    // Crear tabla personal_data
    await queryInterface.createTable('datosPersonales', {
      idpersonal_data: {
        autoIncrement: true,
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true
      },
      user_iduser: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'usuarios',
          key: 'iduser'
        }
      },
      name: {
        type: Sequelize.STRING(45),
        allowNull: false
      },
      lastname: {
        type: Sequelize.STRING(45),
        allowNull: false
      },
      bank_account: {
        type: Sequelize.STRING(45),
        allowNull: false
      },
      phone: {
        type: Sequelize.STRING(45),
        allowNull: true
      },
      address: {
        type: Sequelize.STRING(45),
        allowNull: true
      },
      is_deleted: {
        type: Sequelize.TINYINT,
        allowNull: true,
        defaultValue: 0
      }
    });

    // Crear tabla sale_products
    await queryInterface.createTable('ventaProductos', {
      idsale_products: {
        autoIncrement: true,
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true
      },
      sales_idsales: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'ventas',
          key: 'idsales'
        }
      },
      products_idproducts: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'productos',
          key: 'idproducts'
        }
      },
      quantity: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      total_price: {
        type: Sequelize.DECIMAL(10, 2),
        allowNull: true
      },
      is_deleted: {
        type: Sequelize.TINYINT,
        allowNull: true,
        defaultValue: 0
      }
    });
},

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('ventaProductos');
    await queryInterface.dropTable('datosPersonales');
    await queryInterface.dropTable('tamanoProductos');
    await queryInterface.dropTable('tamanos');
    await queryInterface.dropTable('facturas');
    await queryInterface.dropTable('ventas');
    await queryInterface.dropTable('existencias');
    await queryInterface.dropTable('productos');
    await queryInterface.dropTable('departamentos');
    await queryInterface.dropTable('usuarios');
    await queryInterface.dropTable('roles');
  },
};

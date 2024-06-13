export enum SystemActivity {
  'user_login' = 0,
  'register_user' = 1,
  'add_raw_material' = 2,
  'add_supplier' = 3,
  'update_raw_material' = 4,
  'update_supplier' = 5,
  'delete_user' = 6,
  'update_user' = 7,
  'delete_raw_material' = 8,
  'delete_supplier' = 9,
  'create_prn' = 10,
  'update_prn' = 11,
  'delete_prn' = 12,
  'create_po' = 13,
  'update_po' = 14,
  'delete_po' = 15,
  'create_grn' = 16,
  'update_grn' = 17,
  'delete_grn' = 18,
  'create_srn' = 19,
  'update_srn' = 20,
  'delete_srn' = 21,
  'create_tax_type' = 22,
  'update_tax_type' = 23,
  'delete_tax_type' = 24,
  'create_customer' = 25,
  'update_customer' = 26,
  'delete_customer' = 27,
  'update_customer_contact' = 28,
  'create_batch' = 29,
  'update_batch' = 30,
  'delete_batch' = 31,
  'update_batch_item' = 32,
}

export enum SystemActivityMsg {
  'User logged in',
  'User created',
  'Raw material added',
  'Supplier added',
  'Raw material updated',
  'Supplier updated',
  'User deleted',
  'User updated',
  'Raw material deleted',
  'Supplier deleted',
  'PRN created',
  'PRN updated',
  'PRN deleted',
  'PO created',
  'PO updated',
  'PO deleted',
  'GRN created',
  'GRN updated',
  'GRN deleted',
  'SRN created',
  'SRN updated',
  'SRN deleted',
  'Tax Type created',
  'Tax Type updated',
  'Tax Type deleted',
  'Customer created',
  'Customer updated',
  'Customer deleted',
  'Customer contact updated',
  'Batch created',
  'Batch updated',
  'Batch deleted',
  'Batch item updated',
}

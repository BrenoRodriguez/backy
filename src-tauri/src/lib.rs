use tauri::generate_handler;
pub fn run() {
    tauri::Builder::default()
        .plugin(tauri_plugin_fs::init())
        .invoke_handler(generate_handler![])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}

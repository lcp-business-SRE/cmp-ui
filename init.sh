# 初期化スクリプト
# 使用方法: bash init.sh

C_RED='\033[0;31m'
C_YELLOW='\033[0;33m'
C_GREEN='\033[0;32m'
C_RESET='\033[0m'

if_error_exit() {
    if [ $? -ne 0 ]; then
        echo -e "${C_RED}エラーが発生しました。${C_RESET}"
        exit 1
    fi
}

echo -e "${C_GREEN}gitサブモジュールを初期化します。${C_RESET}"
git submodule update --init --recursive
if_error_exit

echo -e "${C_GREEN}コンポーネントを初期化します。${C_RESET}"
cd quasar
npm ci
if_error_exit
cd ..

echo -e "${C_GREEN}Storybookを初期化します。${C_RESET}"
cd storybook
npm ci
if_error_exit

echo -e "${C_GREEN}Storybookにコンポーネントをインストールします。${C_RESET}"
npm i --install-links ../quasar
if_error_exit

echo -e "${C_GREEN}初期化を完了しました。${C_RESET}"

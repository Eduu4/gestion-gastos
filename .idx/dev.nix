# To learn more about how to use Nix to configure your environment
# see: https://developers.google.com/idx/guides/customize-idx-env
{ pkgs, ... }: {
  # Reverting to the stable channel to fix the build failure.
  channel = "stable-24.05";

  # Use https://search.nixos.org/packages to find packages.
  # Items in a Nix list are separated by spaces, not commas.
  packages = [
    pkgs.nodejs_20
    pkgs.firebase-tools
    pkgs.openjdk17 # The Firebase emulators require Java
  ];

  # Adding a cache-busting variable to force a full rebuild.
  env = {
    REBUILD_TOKEN = "12345";
  };

  idx = {
    # Search for the extensions you want on https://open-vsx.org/ and use "publisher.id"
    extensions = [
      "google.gemini-cli-vscode-ide-companion"
    ];
    
    previews = {
      enable = false;
    };

    # Workspace lifecycle hooks
    workspace = {
      # Runs when a workspace is first created
      onCreate = {
        default.openFiles = [ ".idx/dev.nix" "firebase.json" "README.md" ];
      };
      # Runs when the workspace is (re)started
      onStart = {
        # Start the Firebase emulators in the background.
        # IDX will detect the open ports and prompt you to open them.
        start-emulators = "firebase emulators:start --import=./seed_data --export-on-exit";
      };
    };
  };
}

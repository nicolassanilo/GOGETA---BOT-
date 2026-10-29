{ pkgs }: {
  deps = [
    pkgs.nodejs_24
    pkgs.nodePackages.npm
    # Dependencia del sistema necesaria para el paquete 'sharp' (procesamiento de imágenes)
    pkgs.libvips 
  ];
}